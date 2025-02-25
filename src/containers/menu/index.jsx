import { useEffect, useState } from "react";
import { Banner, ButtonWrapper, CategoryButton, CategoryMenu, Container, ProductsContainer } from "./styles";
import { api } from "../../services/api";
import { FormatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export function Menu() {

    const [categories, setCategories] = useState([]);
    const [products, setProdcuts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    

    const navigate = useNavigate();

    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
        
        const categoryId = +queryParams.get('category');

        if(categoryId) {
            return categoryId
        } 
        return 0

    });

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories')

            const newCategories = [{ id: 0, name: 'All' }, ...data]

            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get('/products')

            const newProducts = data.map((product) => ({ currencyValue: FormatPrice(product.price), ...product }));

            setProdcuts(newProducts);
        }

        loadCategories();
        loadProducts();

    }, []);

    useEffect(() => {

        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter((product) => product.category_id === activeCategory,)
            setFilteredProducts(newFilteredProducts);
        };

    }, [products, activeCategory]);

    return (

        <Container>
            <Banner>
                <h1>
                    The best <br />
                    BURGER   <br />
                    is HERE
                    <span>Overwhelming desire</span>
                </h1>

            </Banner>

            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton key={category.id}
                    $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: "/menu",
                                    search: `?category=${category.id}`,
                                },
                                {
                                    replace: true,
                                },
                                setActiveCategory(category.id)
                            );
                        }
                        }

                    >
                        {category.name}</CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {
                    filteredProducts.map(product => (
                        <CardProduct product={product} key={product.id} />
                    ))
                }
                <ButtonWrapper>
                    <Button
                    onClick={()=> {
                        navigate(
                            {
                                pathname: "/",
                            },
    )}}
                    >Return</Button>
                </ButtonWrapper>
            </ProductsContainer>

       
        </Container>
        
    )
}