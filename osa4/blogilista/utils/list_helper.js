const dummy = (blogs) => {
    return 1
}
  

const totalLikes = (blogs) => {
    return blogs.map(blog => blog.likes).reduce((previous, current) => previous + current, 0)
}

const favouriteBlog = (blogs) => {
    return (blogs.reduce((previous, current) => current.likes > previous.likes ? current : previous))
}
module.exports = {
    dummy, totalLikes, favouriteBlog
  }