---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

    You might have noticed that each markdown file has a metadata section at the top containing title and date. This is called YAML Front Matter, which can be parsed using a library called gray-matter.

Installing gray-matter

First, install gray-matter which lets us parse the metadata in each markdown file.

npm install gray-matter

Creating the utility function to read the file system

Next, we’ll create a utility function for parsing data from the file system. With this utility function, we’d like to:

    Parse each markdown file and get title, date, and file name (which will be used as id for the post URL).
    List the data on the index page, sorted by date.

Create a top-level directory called lib in the root directory. Then, inside lib, create a file called posts.js, and copy and paste this code:

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

    Note:

    You don't need to understand what the code above is doing in order to learn Next.js, the function is to make the blog example functional. But if you'd like to learn more:

        fs is a Node.js module that let's you read files from the file system.
        path is a Node.js module that let's you manipulate file paths.
        matter is a library that let's you parse the metadata in each markdown file.
        In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils.

Fetching the blog data

Now that the blog data is parsed, we need to add it to our index page (pages/index.js). We can do this with a Next.js data fetching method called getStaticProps(). In the next section, we'll learn how to implement getStaticProps().

Let’s do it on the next page!

Was this helpful?
Email
Feedback
You can also ask the community on GitHub Discussions.
General resources

Docs

Learn

Showcase

Blog

Analytics

Next.js Conf

Live
More

Commerce

Contact Sales

GitHub

Releases

Telemetry
About Vercel

Next.js + Vercel

Open Source Software

GitHub

Twitter
Legal

Privacy Policy
Copyright © 2022 Vercel, Inc. All rights reserved.