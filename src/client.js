import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client= sanityClient({
    projectId: 'h11ltqnq' ,
    dataset:'production',
    apiVersion:'2021-10-21',
    useCdn:'true',
    token:'skydNUwnstO6Uu5Q7VMuINycwQ7dhowQz40PSvkQz4n03g11xcQDLn1li0GlasU9Z0UK8b1Sl2U922gb3bthey1ZZtRakqqTxcC3b8gh9rjAnZd6m2flokpid84VU665QYY7iYn2znyhNptfRa4c1Bp8uy3hMcR1Wd6k8TiT2gneFIZv3x8U'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);