import Mock from 'mockjs'
import articles from'./articles.json'
import tests from'./tests.json'
import testsDetails from'./testsDetails.json'
import rooms from'./rooms.json'
Mock.mock('/mock/articles',{
    code:200,
    data:articles
})
Mock.mock('/mock/tests',{
    code:200,
    data:tests
})
Mock.mock('/mock/good',{
    code:200,
    data:testsDetails
})
Mock.mock('/mock/rooms',{
    code:200,
    data:rooms
})


