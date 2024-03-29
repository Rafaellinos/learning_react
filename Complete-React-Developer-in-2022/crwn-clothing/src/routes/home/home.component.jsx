import CategoryComponent from "../../components/category/category.component";

const Home = () => {

    const categories = [
        {
            id: 1,
            title: "Hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            id: 2,
            title: "Jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            id: 3,
            title: "Sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            id: 4,
            title: "Womans",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            id: 5,
            title: "Mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
        }
    ]

    return (
        <div>
            <CategoryComponent categories={categories}/>
        </div>
    );
}

export default Home;
