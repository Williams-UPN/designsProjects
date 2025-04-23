import qs from "qs";
import { flattenAttributes } from "@/lib/utils";
import { getStrapiURL } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";

async function fetchStrapi(path: string, queryString?: string) {
  const { baseUrl, token } = getStrapiURL();
  const url = new URL(path, baseUrl);
  url.search = queryString ?? homePageQuery;

  console.log("Fetching URL:", url.toString());

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    console.error("Error response from Strapi:", errorData);
    throw new Error(`Error HTTP: ${res.status}`);
  }
  return res.json();
}

const homePageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "layaout.seo": {
            populate: {
              Slider: {
                fields: ["id", "title", "description"],
                populate: {
                  slider: {
                    fields: ["url", "alternativeText", "formats"],
                  },
                },
              },
            },
          },
          "layaout.header": {
            populate: {
              imageIco: { fields: ["url", "alternativeText"] },
              logoText: true,
              ctaButton: true,
            },
          },
          "layaout.features-section": {
            fields: ["title", "description"],
            populate: { feature: { populate: true } },
          },
          "layaout.services-section": {
            fields: ["mainHeading"],
            populate: {
              linkCompleteService: {
                fields: ["heading", "subHeading", "subHeadingComplete"],
                populate: {
                  image: { fields: ["url", "alternativeText", "formats"] },
                  videoLink: true,
                },
                sort: "heading:asc",
              },
              imageService: { fields: ["url", "alternativeText"] },
              imageProject: { fields: ["url", "alternativeText"] },
              imageContact: { fields: ["url", "alternativeText"] },
            },
          },
          "layaout.projects": {
            fields: ["heading", "subHeading"],
            populate: {
              link: {
                fields: ["heading", "subHeading"],
                populate: {
                  imageProject: { fields: ["url", "alternativeText"] },
                  linkGallery: {
                    populate: {
                      sliderImageProjects: { fields: ["url", "alternativeText"] },
                    },
                  },
                },
              },
            },
          },
          "layaout.footer": {
            fields: ["text", "address", "linkAddress"],
            populate: { socialLink: true },
          },
        },
      },
    },
  },
  { encodeValuesOnly: true }
);

export async function getHomeData() {
  noStore();
  const res = await fetchStrapi("/api/home", homePageQuery);

  const { blocks = [] } = res.data || {};
  const flattenedBlocks = blocks.map((b: any) => flattenAttributes(b));

  const seoBlock = flattenedBlocks.find((b: any) => b.__component === "layaout.seo");
  const slider = (seoBlock?.Slider || []).map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.slider,
  }));

  return {
    blocks: flattenedBlocks,
    slider,
  };
}

export async function getGlobalMetadata() {
  noStore();
  const res = await fetchStrapi("/api/home", homePageQuery);
  const { blocks = [] } = res.data || {};
  const seoBlock = blocks.find((b: any) => b.__component === "layaout.seo");

  return {
    data: {
      title: seoBlock?.title || "Epic Next Course",
      description: seoBlock?.description || "Epic Next Course",
    },
  };
}
