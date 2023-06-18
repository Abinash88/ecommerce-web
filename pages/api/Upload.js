import multiparty from 'multiparty'

export default async function handler(req, res) {
   
    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
           return resolve({fields, files});
        })
    })
    console.log('length: ', files.file, 'and ', fields);
    return res.status(200).json('ok');
}

export const config = {
    api: { bodyParser: false },
}