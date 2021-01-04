import React from "react"
import { useSiteMetadata } from "../hooks"
import { PostTagType } from "../types"
import { Link } from "gatsby"
import { replaceSlashes } from "../utils"

type ItemTagsProps = {
  tags: PostTagType[]
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
