const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject){
    console.log(`${key} shortout is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in object){
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
}

    