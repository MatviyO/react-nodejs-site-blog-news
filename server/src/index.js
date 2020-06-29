import { parseLinks, getPosts} from './parsePost';
import fs from 'fs';
 import {elems} from "./configs";


const saveResult = (json) => {
    fs.writeFile('result.json', json, err => {
        if (err) console.log('no saved')
    })
}
const urlPage = 'http://www.riadagestan.ru/news/politics/'
parseLinks
    (urlPage, '.b-mid-col__layout li a', 15 )
        .then(links => {
            getPosts(links, elems.riadagestan).then(posts => saveResult(JSON.stringify(posts)))

})

