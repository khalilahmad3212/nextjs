import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

export default function getImageUrl(image: any) {
    const builder = imageUrlBuilder(client);
    let imageUrl = builder.image(image).url()
    return imageUrl
}