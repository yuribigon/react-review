interface Person {
    _id: number,
    url: string,
    name: string,
    sourceUrl: string,
    films: [string],
    shortFilms:	[string],
    tvShows: [string],
    videoGames:	[string],
    alignment: string,
    parkAttractions: [string],
    allies:	[string],
    enemies: [string],
    imageUrl: string
}
    
export default Person;