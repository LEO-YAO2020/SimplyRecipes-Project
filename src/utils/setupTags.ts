interface ContentInter {
  tags: Array<string>
}

export interface TagsInter {
  content: ContentInter
  cookTime: number
  id: string
  image: Array<any>
  prepTime: string
  title: string
}

const setupTags = (recipes: Array<TagsInter>): Array<any> => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b

    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
