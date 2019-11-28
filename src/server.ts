import app from './app'

app.listen(`${process.env.SERVER_PORT}`, () => {
    console.log(`Server is listening on port ${process.env.SERVER_PORT}`)
})
