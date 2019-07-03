export const expectIdInReactComponent = (url) => {
    let l = url.split('/');
    let loc = l[l.length-1]
    let loc_1=l[l.length-2]

    if (loc_1==="Profile" && loc !== undefined) {
        return loc;
    }else{
        return new Error("this component can't be rendered without a valid id")
    }
}