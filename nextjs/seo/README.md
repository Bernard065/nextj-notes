# Routing

## Static Metadata

It's information that doesn't change often, if at all. This includes things like the page title, meta description and meta keywords. Once set, these elements remain the same unless intentionally updated by the website owner/developer.

## Dynamic Metadata

It's information that can change based on various factors like user interactions, search queries or other conditions. This type of metadata is often generated automatically by website's content management system(cms) or scripting languages.

In next.js, we can implement both of these using two methods:

## Config Based

static

```javascript
export const metadata = {
title: 'Next.js',
description: : 'Experience'
}

```

Dynamic

If there are dynamically generated pages, ie. dynamic routes, that we want search engines to index, we can use the generateMetada function.

```javascript
export async function generateMetadata({params}) {
const {id} = params
const resource = await getResourceById({id})

    const title = resource.title + '| nextjs'
    const seoDescription = 'Free resources'

    return {
        title,
        description: seoDescription,
        other: {
            "og:title": title,
            "og:description": seoDescription,
            "og:image": resource.image,
            "twitter:title": title,
            "twitter:image": resource.image,
            "twitter:description": seoDescription,
        }
    }

}

export default function Page({params, searchParams})
```