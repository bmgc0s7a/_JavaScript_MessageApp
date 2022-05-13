import { qs } from '../../../helpers/dom/querySel.js';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const randomMessage = function(){
    return {
        detail: {
            id: qs('#messages').childElementCount,
            owner: 'Random',
            message: faker.lorem.sentence(),
            dateTime: new Date()
        }
    }
}

export {randomMessage};