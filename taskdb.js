db.movies.deleteMany({rating:8.6});
db.movies.update({
      name: "Jai Bhim"
    },
    {
     $set: {
      rating: 9
    }
    });
