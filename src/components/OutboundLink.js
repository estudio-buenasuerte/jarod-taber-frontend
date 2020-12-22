import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const serializers = {
    marks: {
        link: ({ mark, children }) => {
            const { blank, href } = mark
            return blank ?
                <OutboundLink href={href} target='_blank' rel='noopener noreferrer'>{children}</OutboundLink>
                : <OutboundLink href={href}>{children}</OutboundLink>
        }
    }
}

const Experience = blocks => (
    <BlockContent blocks={blocks.blocks} serializers={serializers} />
)


export default Experience