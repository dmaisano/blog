import React from "react"
import { useSiteMetadata } from "../hooks"
import { PostTag } from "../types"
import { Link } from "gatsby"
import { replaceSlashes } from "../utils"

type ItemTagsProps = {
  tags: PostTag[]
}

const ItemTags: React.FC<ItemTagsProps> = ({ tags }) => {
  const { basePath, tagsPath } = useSiteMetadata()

  return (
    <>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `, `}
          <Link to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}>
            {tag.name}
          </Link>
        </React.Fragment>
      ))}
    </>
  )
}

export default ItemTags
