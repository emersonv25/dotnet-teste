module.exports = {
    apps: [
        {
            name : "api-teste",
            script : "runApi.sh",
            cwd: "./api-teste/bin/Release/net6.0/",
            max_memory_restart : "1G"
        }
    ]
}