fill: {
    type: 'image',
        image: {
        src: ['/path/to/image1.png', 'path/to/image2.jpg'],
            width: undefined,  // optional
                height: undefined  //optional
    }
}




options: {
    chart: {
        id: "basic-bar"
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
},
series: [
    {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
]