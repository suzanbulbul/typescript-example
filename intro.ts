//tsc intro.ts -> ts ile yazılan dosyayı, js olarak farklı bir dosyada compile eder
function greeter(name:string){
    return "Hello" + name
}

let message = greeter('Suzan')