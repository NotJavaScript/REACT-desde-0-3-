// import { useState } from "react";

const apiKEY = 'TNOFPUajJrIFlGAgJ18mUDg8RoNRvI8I'

export default function getGifs ({keyword = 'cat'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`; 

       return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data = []} = response
        if(Array.isArray(data)) {
           const gifs = data.map(image => {
           const { images, title, id } = image
           const { url } = images.fixed_width_small
           return { title, id, url }
        })
      return gifs
    }
  })
}