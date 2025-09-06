import { getCollection } from "astro:content";

const articlesCollection = (
  await getCollection("blog", ({ data }) => {
    return data.isDraft !== true && new Date(data.publishedTime) < new Date();
  })
).sort((a, b) =>
  new Date(b.data.publishedTime)
    .toISOString()
    .localeCompare(new Date(a.data.publishedTime).toISOString())
);


export const articlesHandler = {
  allArticles: () => articlesCollection,

  mainHeadline: () => {
    const article = articlesCollection.find(
      (article) => article.data.isMainHeadline === true
    );
    if (!article)
      throw new Error(
        "Please ensure there is at least one item to display for the main headline."
      );
    return article;
  },

  subHeadlines: () => {
    let mainHeadline;
    try {
      mainHeadline = articlesHandler.mainHeadline();
    } catch (err) {
      throw new Error(
        "Cannot get sub headlines because there is no main headline."
      );
      // Return here to prevent further execution
      // return [];
    }
    if (!mainHeadline) {
      throw new Error(
        "Cannot get sub headlines because there is no main headline."
      );
    }
    const subHeadlines = articlesCollection
      .filter(
        (article) =>
          article.data.isSubHeadline === true &&
          mainHeadline.id !== article.id
      )
      .slice(0, 4);
    
    if (subHeadlines.length === 0)
      throw new Error(
        "Please ensure there is at least one item to display for the sub headlines."
      );
    return subHeadlines;
  },
};