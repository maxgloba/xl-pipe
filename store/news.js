export const state = () => ({
  posts: [
    {
      slug: 'news-slug-1',
      thumb: 'news-img2.png',
      image: 'news-img3.png',
      title: 'ЗАГОЛОВОК 1',
      date: '01.02.2023',
      topic: 'Новости',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa.',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere. Ut facilisis erat nulla, id ornare felis ullamcorper eu. Phasellus hendrerit quam dui, a molestie magna consectetur eu. Cras sagittis arcu quis imperdiet tincidunt. Ut a faucibus est. Curabitur auctor semper urna, a egestas quam. Vivamus rhoncus leo sed quam efficitur, at accumsan odio ullamcorper. Vestibulum quam tellus, vehicula vitae est ut, consectetur hendrerit erat.</p>
        <p>Integer vel commodo purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam dolor magna, malesuada sit amet pharetra eu, tincidunt nec nunc. Etiam in rhoncus ipsum. Sed faucibus blandit venenatis. Maecenas eget accumsan quam. Donec luctus auctor magna. </p>
        <p>Pellentesque sit amet dignissim magna. Aliquam vel cursus lectus. Etiam non tincidunt arcu. Vivamus tincidunt nulla tincidunt, placerat felis ut, efficitur nisl.</p>
        <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere.</span></p>
        <p>Curabitur in viverra turpis, ut sollicitudin nisi. Integer diam nisi, facilisis eget metus quis, ullamcorper cursus lacus. Duis tempor vitae nulla eget tincidunt. Vivamus sed consequat nunc. Etiam euismod quam in luctus blandit. Nullam diam tellus, bibendum id eros sed, accumsan ornare nisi. Phasellus pretium lectus quam, non varius est pellentesque eu. Maecenas porta lobortis dolor. Vivamus sagittis a sapien vitae posuere. Duis rutrum aliquet pretium. Ut augue metus, egestas vitae magna vel, aliquet mollis justo. Sed vel ex eget turpis mollis pretium ac eu magna. Praesent sed sapien maximus, viverra massa non, dictum libero. Pellentesque auctor, ante ornare auctor blandit, quam velit gravida mi, sit amet fringilla turpis dui at arcu. Nam vitae ante dolor.</p>
        <p>Praesent mollis volutpat imperdiet. Cras neque leo, dignissim vel posuere quis, molestie vitae massa. Sed et pharetra felis. Proin eleifend a ligula non bibendum. Morbi ut dui vitae nunc efficitur aliquam. Mauris et iaculis sapien, in gravida neque. Mauris et elit orci. Curabitur ligula mi, maximus quis mauris a, maximus dapibus ipsum.</p>
      `
    },
    {
      slug: 'news-slug-2',
      thumb: 'news-img2.png',
      image: 'news-img3.png',
      title: 'ЗАГОЛОВОК 2',
      date: '02.02.2023',
      topic: 'Акции',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa.',
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere. Ut facilisis erat nulla, id ornare felis ullamcorper eu. Phasellus hendrerit quam dui, a molestie magna consectetur eu. Cras sagittis arcu quis imperdiet tincidunt. Ut a faucibus est. Curabitur auctor semper urna, a egestas quam. Vivamus rhoncus leo sed quam efficitur, at accumsan odio ullamcorper. Vestibulum quam tellus, vehicula vitae est ut, consectetur hendrerit erat.
        <br><br>
        Integer vel commodo purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam dolor magna, malesuada sit amet pharetra eu, tincidunt nec nunc. Etiam in rhoncus ipsum. Sed faucibus blandit venenatis. Maecenas eget accumsan quam. Donec luctus auctor magna. <br>
        Pellentesque sit amet dignissim magna. Aliquam vel cursus lectus. Etiam non tincidunt arcu. Vivamus tincidunt nulla tincidunt, placerat felis ut, efficitur nisl.
        <br><br>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere.</span>
        <br><br>
        Curabitur in viverra turpis, ut sollicitudin nisi. Integer diam nisi, facilisis eget metus quis, ullamcorper cursus lacus. Duis tempor vitae nulla eget tincidunt. Vivamus sed consequat nunc. Etiam euismod quam in luctus blandit. Nullam diam tellus, bibendum id eros sed, accumsan ornare nisi. Phasellus pretium lectus quam, non varius est pellentesque eu. Maecenas porta lobortis dolor. Vivamus sagittis a sapien vitae posuere. Duis rutrum aliquet pretium. Ut augue metus, egestas vitae magna vel, aliquet mollis justo. Sed vel ex eget turpis mollis pretium ac eu magna. Praesent sed sapien maximus, viverra massa non, dictum libero. Pellentesque auctor, ante ornare auctor blandit, quam velit gravida mi, sit amet fringilla turpis dui at arcu. Nam vitae ante dolor.
        <br><br>
        Praesent mollis volutpat imperdiet. Cras neque leo, dignissim vel posuere quis, molestie vitae massa. Sed et pharetra felis. Proin eleifend a ligula non bibendum. Morbi ut dui vitae nunc efficitur aliquam. Mauris et iaculis sapien, in gravida neque. Mauris et elit orci. Curabitur ligula mi, maximus quis mauris a, maximus dapibus ipsum.
      `
    },
    {
      slug: 'news-slug-3',
      thumb: 'news-img2.png',
      image: 'news-img3.png',
      title: 'ЗАГОЛОВОК 3',
      date: '03.02.2023',
      topic: 'Мероприятия',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa.',
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere. Ut facilisis erat nulla, id ornare felis ullamcorper eu. Phasellus hendrerit quam dui, a molestie magna consectetur eu. Cras sagittis arcu quis imperdiet tincidunt. Ut a faucibus est. Curabitur auctor semper urna, a egestas quam. Vivamus rhoncus leo sed quam efficitur, at accumsan odio ullamcorper. Vestibulum quam tellus, vehicula vitae est ut, consectetur hendrerit erat.
        <br><br>
        Integer vel commodo purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam dolor magna, malesuada sit amet pharetra eu, tincidunt nec nunc. Etiam in rhoncus ipsum. Sed faucibus blandit venenatis. Maecenas eget accumsan quam. Donec luctus auctor magna. <br>
        Pellentesque sit amet dignissim magna. Aliquam vel cursus lectus. Etiam non tincidunt arcu. Vivamus tincidunt nulla tincidunt, placerat felis ut, efficitur nisl.
        <br><br>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere.</span>
        <br><br>
        Curabitur in viverra turpis, ut sollicitudin nisi. Integer diam nisi, facilisis eget metus quis, ullamcorper cursus lacus. Duis tempor vitae nulla eget tincidunt. Vivamus sed consequat nunc. Etiam euismod quam in luctus blandit. Nullam diam tellus, bibendum id eros sed, accumsan ornare nisi. Phasellus pretium lectus quam, non varius est pellentesque eu. Maecenas porta lobortis dolor. Vivamus sagittis a sapien vitae posuere. Duis rutrum aliquet pretium. Ut augue metus, egestas vitae magna vel, aliquet mollis justo. Sed vel ex eget turpis mollis pretium ac eu magna. Praesent sed sapien maximus, viverra massa non, dictum libero. Pellentesque auctor, ante ornare auctor blandit, quam velit gravida mi, sit amet fringilla turpis dui at arcu. Nam vitae ante dolor.
        <br><br>
        Praesent mollis volutpat imperdiet. Cras neque leo, dignissim vel posuere quis, molestie vitae massa. Sed et pharetra felis. Proin eleifend a ligula non bibendum. Morbi ut dui vitae nunc efficitur aliquam. Mauris et iaculis sapien, in gravida neque. Mauris et elit orci. Curabitur ligula mi, maximus quis mauris a, maximus dapibus ipsum.
      `
    },
    {
      slug: 'news-slug-4',
      thumb: 'news-img2.png',
      image: 'news-img3.png',
      title: 'ЗАГОЛОВОК 4',
      date: '04.02.2023',
      topic: 'Полезное',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa.',
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere. Ut facilisis erat nulla, id ornare felis ullamcorper eu. Phasellus hendrerit quam dui, a molestie magna consectetur eu. Cras sagittis arcu quis imperdiet tincidunt. Ut a faucibus est. Curabitur auctor semper urna, a egestas quam. Vivamus rhoncus leo sed quam efficitur, at accumsan odio ullamcorper. Vestibulum quam tellus, vehicula vitae est ut, consectetur hendrerit erat.
        <br><br>
        Integer vel commodo purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam dolor magna, malesuada sit amet pharetra eu, tincidunt nec nunc. Etiam in rhoncus ipsum. Sed faucibus blandit venenatis. Maecenas eget accumsan quam. Donec luctus auctor magna. <br>
        Pellentesque sit amet dignissim magna. Aliquam vel cursus lectus. Etiam non tincidunt arcu. Vivamus tincidunt nulla tincidunt, placerat felis ut, efficitur nisl.
        <br><br>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere.</span>
        <br><br>
        Curabitur in viverra turpis, ut sollicitudin nisi. Integer diam nisi, facilisis eget metus quis, ullamcorper cursus lacus. Duis tempor vitae nulla eget tincidunt. Vivamus sed consequat nunc. Etiam euismod quam in luctus blandit. Nullam diam tellus, bibendum id eros sed, accumsan ornare nisi. Phasellus pretium lectus quam, non varius est pellentesque eu. Maecenas porta lobortis dolor. Vivamus sagittis a sapien vitae posuere. Duis rutrum aliquet pretium. Ut augue metus, egestas vitae magna vel, aliquet mollis justo. Sed vel ex eget turpis mollis pretium ac eu magna. Praesent sed sapien maximus, viverra massa non, dictum libero. Pellentesque auctor, ante ornare auctor blandit, quam velit gravida mi, sit amet fringilla turpis dui at arcu. Nam vitae ante dolor.
        <br><br>
        Praesent mollis volutpat imperdiet. Cras neque leo, dignissim vel posuere quis, molestie vitae massa. Sed et pharetra felis. Proin eleifend a ligula non bibendum. Morbi ut dui vitae nunc efficitur aliquam. Mauris et iaculis sapien, in gravida neque. Mauris et elit orci. Curabitur ligula mi, maximus quis mauris a, maximus dapibus ipsum.
      `
    },
    {
      slug: 'news-slug-5',
      thumb: 'news-img2.png',
      image: 'news-img3.png',
      title: 'ЗАГОЛОВОК 5',
      date: '05.02.2023',
      topic: 'Новости',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa.',
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere. Ut facilisis erat nulla, id ornare felis ullamcorper eu. Phasellus hendrerit quam dui, a molestie magna consectetur eu. Cras sagittis arcu quis imperdiet tincidunt. Ut a faucibus est. Curabitur auctor semper urna, a egestas quam. Vivamus rhoncus leo sed quam efficitur, at accumsan odio ullamcorper. Vestibulum quam tellus, vehicula vitae est ut, consectetur hendrerit erat.
        <br><br>
        Integer vel commodo purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam dolor magna, malesuada sit amet pharetra eu, tincidunt nec nunc. Etiam in rhoncus ipsum. Sed faucibus blandit venenatis. Maecenas eget accumsan quam. Donec luctus auctor magna. <br>
        Pellentesque sit amet dignissim magna. Aliquam vel cursus lectus. Etiam non tincidunt arcu. Vivamus tincidunt nulla tincidunt, placerat felis ut, efficitur nisl.
        <br><br>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum porta lorem in posuere.</span>
        <br><br>
        Curabitur in viverra turpis, ut sollicitudin nisi. Integer diam nisi, facilisis eget metus quis, ullamcorper cursus lacus. Duis tempor vitae nulla eget tincidunt. Vivamus sed consequat nunc. Etiam euismod quam in luctus blandit. Nullam diam tellus, bibendum id eros sed, accumsan ornare nisi. Phasellus pretium lectus quam, non varius est pellentesque eu. Maecenas porta lobortis dolor. Vivamus sagittis a sapien vitae posuere. Duis rutrum aliquet pretium. Ut augue metus, egestas vitae magna vel, aliquet mollis justo. Sed vel ex eget turpis mollis pretium ac eu magna. Praesent sed sapien maximus, viverra massa non, dictum libero. Pellentesque auctor, ante ornare auctor blandit, quam velit gravida mi, sit amet fringilla turpis dui at arcu. Nam vitae ante dolor.
        <br><br>
        Praesent mollis volutpat imperdiet. Cras neque leo, dignissim vel posuere quis, molestie vitae massa. Sed et pharetra felis. Proin eleifend a ligula non bibendum. Morbi ut dui vitae nunc efficitur aliquam. Mauris et iaculis sapien, in gravida neque. Mauris et elit orci. Curabitur ligula mi, maximus quis mauris a, maximus dapibus ipsum.
      `
    },
  ]
})

export const getters = {
  getPosts: state => state.posts,
}

export const mutations = {}
export const actions = {}
