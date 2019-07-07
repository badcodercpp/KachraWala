function changeHandler(changeEvent){
    const { handlers, argument } = this;
    const [setInputValue] = handlers;
    const { target } = changeEvent;
    const { value } = target;
    return setInputValue.apply(this,[value])
}

export default {
    changeHandler
}