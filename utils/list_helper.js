const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    const reducer = (sum, item) => sum +=item.likes
    return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    const sorted = blogs.slice(0).sort(function(a, b) {
        return b.likes - a.likes
    })
    return sorted[0]
}
  
module.exports = {
    dummy, totalLikes, favoriteBlog
}