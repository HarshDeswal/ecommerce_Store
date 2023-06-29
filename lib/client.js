import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'7termj7e',
    dataset:'production',
    apiVersion:'2023-06-29',
    useCdn:true,
    token:'sklDXFCvLAapLqhQdaiy6jxnGfs9JdD4XSMiHt5SF3WfLc68inFwQm8iigWzaXTiF1ogWnbOZFDgEkOVvmxZwRcM4b0tij7ysOjuy5KwoP9GQ2Wr7z9yKN8P1xJEyBDrUvcILdrDPXPu05bTjFfWmDd5DQ6qq1a5U4lrqwrameYqGygNC5LY'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);