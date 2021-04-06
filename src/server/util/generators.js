import faker from "faker";
import postMapper from "./post.mapper";

const generateFakePosts = length => {
    return Array.from(Array(length), () => {
        return {
            id: faker.datatype.uuid(),
            created_time: faker.date.past().toISOString(),
            permalink_url: faker.internet.url(),
            message: faker.lorem.sentence(),
            full_picture: faker.image.image(),
            like: {
                data: [],
                summary: {
                    total_count: faker.datatype.number()
                }
            },
            love: {
                data: [],
                summary: {
                    total_count: faker.datatype.number()
                }
            },
            haha: {
                data: [],
                summary: {
                    total_count: faker.datatype.number()
                }
            },
            wow: {
                data: [],
                summary: {
                    total_count: faker.datatype.number()
                }
            },
            sad: {
                data: [],
                summary: {
                    total_count: faker.datatype.number()
                }
            },
            angry: {
                data: [],
                summary: {
                    total_count: faker.datatype.number()
                }
            }
        };
    });
};

export default length => {
    return generateFakePosts(length).map(post => postMapper(post));
};
