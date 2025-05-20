/* Petition to get opinions. */
export async function getOpinions() {
    let response = [];
    await new Promise((resolve, reject) => {
        setTimeout(resolve(
            response = [
                {
                    key: 0,
                    image: "/images/users/1.jpg",
                    name: "Ember O'Connell",
                    date: "12/05/2012",
                    review: "Absolutely loved my breakfast experience! The food was delicious. The pancakes were fluffy and perfectly cooked, and the coffee was just right. I'll definitely be coming back for more!"
                },
                {
                    key: 1,
                    image: "/images/users/2.jpg",
                    name: "Jovanni Hale",
                    date: "02/11/2016",
                    review: "Great breakfast! The variety of options was impressive, from healthy juices to freshly baked cookies. Highly recommend for a relaxing morning meal."
                },
                {
                    key: 2,
                    image: "/images/users/3.jpg",
                    name: "Denzel Brennan",
                    date: "08/07/2020",
                    review: "I had a wonderful breakfast with this service. Loved the coffee flavour and the fresh fruit was a nice touch. A perfect start to my day!"
                },
                {
                    key: 3,
                    image: "/images/users/4.jpg",
                    name: "Curtis Webb",
                    date: "19/10/2023",
                    review: "This breakfast service exceeded my expectations! The food was fresh and flavorful, and the presentation was beautiful."
                },
                {
                    key: 4,
                    image: "/images/users/5.jpg",
                    name: "Ariella Atkins",
                    date: "22/12/2024",
                    review: "A solid choice for breakfast! The menu had something for everyone, and everything I tried was tasty. The prices were reasonable."
                }
            ]
        ), Math.random * 1000);
    })
    return response;
}