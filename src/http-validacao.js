function extractLinks(arrLinks) {
    return arrLinks.map((objLinks) => Object.values(objLinks).join())
}

async function checkStatus(arrUrls) {

    const arrStatus = await Promise
        .all(

            arrUrls.map(async (url) => {

                try {

                    const response = await fetch(url);
                    return `${response.status} - ${response.statusText}`;

                } catch (error) {
                    return managementError(error)
                }

            })

        )

    return arrStatus
}

function managementError(error) {
    if(error.cause.code === 'ENOTFOUND') {
        return 'Atenção! Link não encontrado.'
    } else {
        return 'Atenção! Ocorreu um erro.'
    }
}

export default async function validatedList(arrLinks) {
    const links = extractLinks(arrLinks)
    const status = await checkStatus(links)

    return arrLinks.map((object, index) => ({
        ...object,
        status: status[index]
    }));
}