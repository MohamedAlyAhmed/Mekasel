import sliderOne from "@assets/images/slider1.jpg";
import sliderTwo from "@assets/images/slider2.jpg";
import sliderThree from "@assets/images/slider3.jpg";
import Seo from "@components/common/Seo/Seo";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { CategoryCard } from "@components/eCommerce";
import { Image } from "@components/ui";
import CustomSlider from "@components/ui/CustomSlider/CustomSlider";
import { appPaths } from "@routes/paths";
import { getCategoriesThunk } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import styles from "./Home.module.scss";

const {
    sliderImg,
    dotStyle,
    dotsContainer,
    bannerSliderContainer,
    categoriesSliderContainer,
} = styles;

const sliderImages = [
    { id: 0, src: sliderOne, alt: "slider1" },
    { id: 1, src: sliderTwo, alt: "slider2" },
    { id: 2, src: sliderThree, alt: "slider3" },
];

const Home = () => {
    const dispatch = useAppDispatch();

    const { records } = useAppSelector((state) => state.categories);

    useEffect(() => {
        if (records.length === 0) {
            dispatch(getCategoriesThunk());
        }
    }, [dispatch, records]);

    const bannerSliderSettings = {
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: () => (
            <div className={dotsContainer}>
                <div className={dotStyle} />
            </div>
        ),
    };

    const categorySliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    };

    const arrayOfRecords = Array.from({ length: 4 }, (_, index) => ({
        id: index,
    }));

    return (
        <>
            <Seo title="Home" link={appPaths.home} />
            <div className={bannerSliderContainer}>
                <CustomSlider customSettings={bannerSliderSettings}>
                    {sliderImages.map(({ id, src, alt }) => (
                        <div key={id} className={sliderImg}>
                            <Image src={src} alt={alt} />
                        </div>
                    ))}
                </CustomSlider>
            </div>
            <Wrapper>
                <div className={categoriesSliderContainer}>
                    <CustomSlider customSettings={categorySliderSettings}>
                        {records.length
                            ? records.map((record) => (
                                  <div key={record.id}>
                                      <CategoryCard {...record} />
                                  </div>
                              ))
                            : arrayOfRecords.map((record) => (
                                  <div key={record.id}>
                                      <CategoryCard {...record} />
                                  </div>
                              ))}
                    </CustomSlider>
                </div>
            </Wrapper>
        </>
    );
};

export default Home;
