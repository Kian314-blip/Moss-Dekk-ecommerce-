import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import GetInTouch from "@/components/GetInTouch";
import Main_Image from "@/components/Main_Image";
import Tyre_Info_first from "@/svg/Tyre_Infor_first";
import Tyre_Infor_second from "@/svg/Tyre_Infor_second";
import Tyre_Infor_third from "@/svg/Tyre_Infor_third";
import Tyre_22 from "../../public/image/tyre(22).png"
import Product_detail from "../../public/image/product_detail.png"
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SetStateAction, useState } from "react";
import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from "swiper/modules";
import { Thumbs } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import Dfacebook from "@/svg/Dfacebook";
import Dinstagram from "@/svg/Dinstagram";
import Dlinkedin from "@/svg/Dlinkedin";
import Dtwitter from "@/svg/Dtwitter";
import Dyoutube from "@/svg/Dyoutube";
import axios from "axios";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { useDispatch } from 'react-redux';
import { addToCart, } from '../store/cartSlice';
import BackToTop from "@/components/backToTop";

const inter = Inter({ subsets: ["latin"] });

interface Product {
  purchaseAmount: number;
  id: number;
  brand: string;
  model: string;
  size: string;
  price: number;
  stock: number;
  season: string;
  fuel: string;
  speed: string;
  grip: string;
  noise: string;
  image: string;
  width: number;
  profile: number;
  inches: number;
  load: string;
  euClass: string;
  delay: number;
  description: string;
  recommended: number;
  category: string;

}
interface ProductDescription {
  tyreInfo: string;
  runFlat: string;
  // Add any other properties you expect
}
const backend_url = process.env.NEXT_PUBLIC_API_URL

const ProductDetail = ({ pID }: { pID: number }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [reproduct, setReProduct] = useState<any[]>([])
  const [productDescription, setProductDescription] = useState<ProductDescription | null>(null);

  const [width, setWidth] = useState("");
  const [profile, setProfile] = useState("");
  const [inches, setInches] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const [count, setCount] = useState<number>(product?.purchaseAmount || 4);

  const handleIncrement = () => {
    if (count < 20) {
      setCount(prevCount => prevCount + 1);
      setProduct(prevProduct => prevProduct ? { ...prevProduct, purchaseAmount: prevProduct.purchaseAmount + 1 } : null);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
      setProduct(prevProduct => prevProduct ? { ...prevProduct, purchaseAmount: prevProduct.purchaseAmount - 1 } : null);
    }
  };

  const backProductpage = async () => {
    window.location.href = "/products"
  }
  const productPurchasePage = async () => {
    window.location.href = `/cart`
  }
  const goToDetailPage = (pID: number) => {
    window.location.href = `/pdetail?id=${pID}`
  }
  const fetchProduct = async () => {
    try {
      console.log(id);

      const response = await axios.get(`${backend_url}/productDetailForNewSite.php?pID=${id}`);
      console.log(response.data);

      if (response.data.size == null) {
        setProduct(response.data);
      } else {
        const size = response.data.size;
        const [widthProfile, inches] = size.split('-');
        const [width, profile] = widthProfile.split('/');
        setProduct(response.data);
        setWidth(width);
        setInches(inches);
        setProfile(profile);
      }
      const productDescription = JSON.parse(response.data.description)
      setProductDescription(productDescription);

    }
    catch (error) {
      console.error(error)
    }
  };
  const fetchTyres = async () => {
    const selectSeason = localStorage.getItem("selectSeason") || '';
    const selectWidth = localStorage.getItem("selectedWidth") || '';
    const selectProfile = localStorage.getItem("selectedProfile") || '';
    const selectDimension = localStorage.getItem("selectedDimension") || '';
    try {
      const formDataParams = new URLSearchParams();
      formDataParams.append('method', 'fetchProductDetail');
      formDataParams.append('season', selectSeason);
      formDataParams.append('sizeOne', selectWidth);
      formDataParams.append('sizeTwo', selectProfile);
      formDataParams.append('sizeThree', selectDimension);
      const response = await axios.post(
        `${backend_url}/queryNewSite.php`,
        formDataParams,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      console.log(response.data);

      // Check if response.data is an array
      if (Array.isArray(response.data)) {
        const productsWithAmount = response.data.map((product: any) => ({
          ...product,
          purchaseAmount: 4
        }));
        setReProduct(productsWithAmount);
      } else {
        console.error("Expected an array but got:", response.data);
      }
    } catch (error) {
      console.error("Error fetching tyres:", error);
    }
  };




  useEffect(() => {
    if (!product && id) {
      fetchProduct();
      fetchTyres();
    }
  }, [id]);
  return product ? (
    <div className="home-container flex flex-col">
      <Header />
      <main style={{ "width": '100%' }}>
        <div className="main-container flex flex-col justify-center w-[100%]">
          <Main_Image />
          <div className="product-detail-pan flex flex-row pt-[24px] pl-[309px] pr-[389px] pb-[91px] gap-[105px] bg-[#F7F7F7] max-[1848px]:px-[80px] max-[1848px]:justify-center max-[1340px]:gap-[6px] max-[1340px]:pt-[35px] max-[1340px]:pb-[68px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:px-[16px] max-[900px]:pt-[13px] max-[900px]:gap-[22px] max-[900px]:pb-[19px]">
            <div className="product-detail-image-pan flex flex-col gap-[13px] max-[1340px]:gap-[6px] max-[520px]:gap-[4px]">
              {product?.image && product.image.length > 30 ?
                <>
                  <div className="pd-image w-[640px] h-[700px] flex justify-center items-center bg-white max-[1340px]:w-[474px] max-[1340px]:h-[519px] max-[520px]:w-[343px] max-[520px]:h-[375px]">
                    {product.image.length === 0 ?
                      <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                      :
                      <Image src={product.image} alt="Car accessories image" width={306} height={478} className="w-[306px] h-[478px] max-[1340px]:w-[228px] max-[1340px]:h-[356px] max-[520px]:w-[164px] max-[520px]:h-[257px]"></Image>
                    }
                  </div>
                  <div className="pd-carsouel flex flex-row gap-[12px] justify-between max-[520px]:gap-[8px]">
                    <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                      {product.image.length === 0 ?
                        <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                        :
                        <Image src={product.image} alt="Car accessories image" width={82} height={128} className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                      }
                    </div>
                    <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                      {product.image.length === 0 ?
                        <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                        :
                        <Image src={product.image} alt="Car accessories image" width={82} height={128} className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                      }
                    </div>
                    <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                      {product.image.length === 0 ?
                        <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                        :
                        <Image src={product.image} alt="Car accessories image" width={82} height={128} className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                      }
                    </div>
                    <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                      {product.image.length === 0 ?
                        <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                        :
                        <Image src={product.image} alt="Car accessories image" width={82} height={128} className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                      }
                    </div>
                  </div>
                </>
                :
                <>
                  <div className="pd-image w-[640px] h-[700px] flex justify-center items-center bg-white max-[1340px]:w-[474px] max-[1340px]:h-[519px] max-[520px]:w-[343px] max-[520px]:h-[375px]">
                    {product.image.length === 0 ?
                      <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                      :
                      <Image src={`${backend_url}/uploads/tyreImg/${product.image}`} alt="Car accessories image" width={306} height={478} className="w-[306px] h-[478px] max-[1340px]:w-[228px] max-[1340px]:h-[356px] max-[520px]:w-[164px] max-[520px]:h-[257px]"></Image>
                    }
                  </div>
                  <div className="pd-carsouel flex flex-row gap-[12px] justify-between max-[520px]:gap-[8px]">
                    <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                      {product.image.length === 0 ?
                        <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                        :
                        <Image src={`${backend_url}/uploads/tyreImg/${product.image}`} alt="Car accessories image" width={82} height={128} className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                      }
                    </div>
                    <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                      {product.image.length === 0 ?
                        <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                        :
                        <Image src={`${backend_url}/uploads/tyreImg/${product.image}`} alt="Car accessories image" width={82} height={128} className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                      }
                    </div>
                    <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                      {product.image.length === 0 ?
                        <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                        :
                        <Image src={`${backend_url}/uploads/tyreImg/${product.image}`} alt="Car accessories image" width={82} height={128} className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                      }
                    </div>
                    <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                      {product.image.length === 0 ?
                        <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                        :
                        <Image src={`${backend_url}/uploads/tyreImg/${product.image}`} alt="Car accessories image" width={82} height={128} className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                      }
                    </div>
                  </div>
                </>
              }

            </div>
            <div className="product-detail-infor-pan flex flex-col w-[475px] max-[1340px]:w-[384px] max-[520px]:w-[342px]">
              <div className="pdi-title pt-[42px] max-[1340px]:pt-[0px]">
                <p className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1340px]:text-lg uppercase">{product.brand} - {product.model} - {product.speed}</p>
              </div>
              <div className="pdi-price pt-[15px] max-[1340px]:pt-[19px] max-[520px]:pt-[4px]">
                <p className="text-2xl leading-8 font-semi-bold text-black">Pris: kr {product.price} / stk</p>
              </div>
              {/* <div className="pdi-description pt-[25px] w-[477px] max-[1340px]:w-[384px] max-[520px]:w-[342px] max-[520px]:pt-[11px]">
                <p className="text-lg leading-7 font-normal font-['Inter'] text-black max-[1340px]:text-sm">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem udantium, totam rem aperiam, eaque ipsa quae abventore veritatis et quasi architecto beatae vitae dicta sunt explicabomo enim</p>
              </div> */}
              <div className="pdi-info-list flex flex-row gap-[10px] pt-[15px] max-[1340px]:pt-[51px] max-[1340px]:gap-[6px] max-[520px]:pt-[25px]">
                <div className="pdi-info-item flex flex-col bg-white border-[#D6D6D6] border-[1px] max-[1340px]:justify-between">
                  <div className="pdi-info-item-img h-[118.93px] w-[150px] flex justify-center items-center max-[1340px]:w-[121px] max-[1340px]:h-[96px] max-[520px]:w-[107.83px] max-[520px]:h-[85.56px]">
                    <Tyre_Info_first />
                  </div>
                  <div className="w-full pt-[5px] pb-[3px] flex flex-row gap-[9px] justify-center items-center bg-[#F2F2F2] border-t-[#D6D6D6] border-[1px] max-[1340px]:pt-[7.5px] max-[1340px]:pb-[5.5px] max-[520px]:pt-[7.81px] max-[520px]:pb-[6.03px]">
                    <p className="text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D] max-[1340px]:text-xs max-[520px]:text-sml">Drivstofforbruk</p>
                    <p className="text-lg leading-7 font-medium text-[#000000] uppercase max-[1340px]:text-sm max-[520px]:text-xs">{product.fuel}</p>
                  </div>
                </div>
                <div className="pdi-info-item flex flex-col bg-white border-[#D6D6D6] border-[1px] max-[1340px]:justify-between">
                  <div className="pdi-info-item-img h-[118.93px] w-[150px] flex justify-center items-center max-[1340px]:w-[121px] max-[1340px]:h-[96px] max-[520px]:w-[107.83px] max-[520px]:h-[85.56px]">
                    <Tyre_Infor_second />
                  </div>
                  <div className="w-full pt-[5px] pb-[3px] flex flex-row gap-[9px] justify-center items-center bg-[#F2F2F2] border-t-[#D6D6D6] border-[1px] max-[1340px]:pt-[7.5px] max-[1340px]:pb-[5.5px] max-[520px]:pt-[7.81px] max-[520px]:pb-[6.03px]">
                    <p className="text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D]  max-[1340px]:text-xs  max-[520px]:text-sml">Våtgrep</p>
                    <p className="text-lg leading-7 font-medium text-[#000000] uppercase max-[1340px]:text-sm max-[520px]:text-xs">{product.grip}</p>
                  </div>
                </div>
                <div className="pdi-info-item flex flex-col bg-white border-[#D6D6D6] border-[1px] max-[1340px]:justify-between">
                  <div className="pdi-info-item-img h-[118.93px] w-[150px] flex justify-center items-center max-[1340px]:w-[121px] max-[1340px]:h-[96px] max-[520px]:w-[107.83px] max-[520px]:h-[85.56px]">
                    <Tyre_Infor_third />
                  </div>
                  <div className="w-full pt-[5px] pb-[3px] flex flex-row gap-[9px] justify-center items-center bg-[#F2F2F2] border-t-[#D6D6D6] border-[1px] max-[1340px]:pt-[7.5px] max-[1340px]:pb-[5.5px] max-[520px]:pt-[7.81px] max-[520px]:pb-[6.03px]">
                    <p className="text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D]  max-[1340px]:text-xs  max-[520px]:text-sml">Støynivå</p>
                    <p className="text-lg leading-7 font-medium text-[#000000] uppercase max-[1340px]:text-sm max-[520px]:text-xs">{product.noise}DB</p>
                  </div>
                </div>
              </div>
              <div className="pdi-infor-figure flex flex-col mt-[4px] border-[#D6D6D6] border-[1px] max-[1340px]:mt-[33px] max-[520px]:mt-[29.41px]">
                <div className="grid grid-cols-2">
                  <div className="p-[10px] bg-white text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Load</div>
                  <div className="py-[10px] bg-white flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">{product.load}</div>
                </div>
                {
                  product.euClass &&
                  <div className="grid grid-cols-2">
                    <div className="p-[10px] bg-[#F8F8F8] text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Eu Klasse</div>
                    <div className="py-[10px] bg-[#F8F8F8] flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">{product.euClass}</div>
                  </div>
                }
                <div className="grid grid-cols-2">
                  <div className="p-[10px] bg-white text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Bredde</div>
                  <div className="py-[10px] bg-white flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">{product.width != null ? (product.width) : (width)}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-[10px] bg-[#F8F8F8] text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Season</div>
                  <div className="py-[10px] bg-[#F8F8F8] flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px] uppercase">{product.season}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-[10px] bg-white text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Profil</div>
                  <div className="py-[10px] bg-white flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">{product.profile != null ? (product.profile) : (profile)}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-[10px] bg-[#F8F8F8] text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Diameter</div>
                  <div className="py-[10px] bg-[#F8F8F8] flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">{product.inches != null ? (product.inches) : (inches)}</div>
                </div>
                {productDescription && (
                  <div className="grid grid-cols-2">
                    <div className="p-[10px] bg-[#F8F8F8] text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Runflat</div>
                    <div className="py-[10px] bg-[#F8F8F8] flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px] uppercase  ">{productDescription.runFlat}</div>
                  </div>
                )}

              </div>
              {
                product.stock >= 4 ?
                  <div className="pdi-left-amount pt-[31px] flex flex-row items-center max-[1340px]:pt-[13px] max-[520px]:pt-[12px]">
                    <p className="text-lg leading-7 font-medium text-black  max-[1340px]:text-sm">På lager <span className="text-lg leading-7 font-medium text-[#6D6D6D]  max-[1340px]:text-sm">- </span><span className="text-lg leading-7 font-medium text-[#6D6D6D]  max-[1340px]:text-sm">Levering ca. 3-5 dager</span></p>
                  </div> : <></>
              }
              <div className="pdi-choose-amount flex flex-row gap-[12px] pt-[23px]  max-[1340px]:pt-[8px]  max-[1340px]:gap-[6px] max-[520px]:pt-[35px] max-[520px]:gap-[4.91px]">
                <div className="choose-amount-pan flex flex-row gap-[2px]">

                  <div
                    className="cursor-pointer choose-item flex justify-center items-center w-[56px] h-[55px] text-4xl leading-7 text-black font-normal font-['Inter'] bg-white border-[#D6D6D6] border-[1px] max-[1340px]:h-[44px] max-[1340px]:text-2xl max-[520px]:w-[49.91px] max-[520px]:h-[39.21px]"
                    onClick={handleDecrement}
                  >
                    -
                  </div>
                  <div className="choose-item flex justify-center items-center w-[56px] h-[55px] text-lg leading-7 text-black font-normal font-['Inter'] bg-white border-[#D6D6D6] border-[1px] max-[1340px]:h-[44px] max-[1340px]:text-sm max-[520px]:w-[49.91px] max-[520px]:h-[39.21px]">
                    {count}
                  </div>
                  <div
                    className="cursor-pointer choose-item flex justify-center items-center w-[56px] h-[55px] text-4xl leading-7 text-black font-normal font-['Inter'] bg-white border-[#D6D6D6] border-[1px] max-[1340px]:h-[44px] max-[1340px]:text-2xl max-[520px]:w-[49.91px] max-[520px]:h-[39.21px]"
                    onClick={handleIncrement}
                  >
                    +
                  </div>
                </div>
                <div className="choose-amount-btn-group flex flex-row gap-[11px] max-[1340px]:gap-[6px] max-[520px]:gap-[5.35px]">
                  <div className="px-[10px] py-[13.5px] flex justify-center items-center bg-[#73C018] max-[1340px]:px-[15px] max-[1340px]:py-[12px] max-[520px]:py-[9.61px] max-[520px]:px-[9.18px] cursor-pointer" onClick={() => {
                    const productWithPurchaseAmount = {
                      ...product,
                      purchaseAmount: count  // Make sure this uses the latest count
                    };

                    productPurchasePage();
                    handleAddToCart(productWithPurchaseAmount);  // Pass updated product with purchaseAmount
                  }}>
                    <p className="text-lg leading-7 font-normal font-['Inter'] max-[1340px]:text-sm text-white">KJØP DEKK</p>
                  </div>
                  <div className="px-[10px] py-[13.5px] flex justify-center items-center bg-[#AAAAAA] max-[1340px]:px-[12px] max-[1340px]:py-[12px] max-[520px]:py-[9.61px] max-[520px]:px-[7.39px] cursor-pointer" onClick={backProductpage}>
                    <p className="text-lg leading-7 font-normal font-['Inter'] max-[1340px]:text-sm text-white" >Gå tilbake</p>
                  </div>

                </div>
              </div>
              <div className="pdi-category flex flex-row pt-[22px] gap-[7px] max-[1340px]:pt-[11px] max-[1340px]:gap-[5px] max-[520px]:pt-[11.79px]">
                <p className="text-lg leading-7 font-medium text-black max-[1340px]:text-sm">Kategorier:</p>
                <p className="text-lg leading-7 font-medium text-[#6D6D6D] max-[1340px]:text-sm">{product.category}</p>
              </div>
              <div className="pdi-chare flex flex-row gap-[13px] pt-[6px] max-[520px]:pt-[5px+]">
                <p className="text-base font-medium text-[#000000] leading-5 max-[1340px]:text-sm">Share</p>
                <div className="flex flex-row gap-[20px] max-[1340px]:gap-[14px]">
                  <Dfacebook />
                  <Dinstagram />
                  <Dyoutube />
                  <Dtwitter />
                  <Dlinkedin />
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail-description flex flex-col pt-[21px] pl-[304px] pr-[313px] pb-[145px] bg-white max-[1450px]:px-[80px] max-[1450px]:pt-[15px] max-[1450px]:pb-[11px] max-[488px]:pt-[19px] max-[488px]:px-[16px] max-[488px]:pb-[9px]">
            <div className="pdd-title border-b-[#F7F7F7] border-b-[1px] pb-[18px] max-[1450px]:pb-[11px]">
              <p className="text-2xl text-black font-semi-bold max-[1450px]:text-lg">Description</p>
            </div>
            <div className="pdd-content pt-[32px] max-[1450px]:pt-[15px]">
              {productDescription == null ?
                <div className="text-black font-['Inter']">No description</div> :
                <p className="text-lg leading-7 font-normal font-['Inter'] text-black max-[1450px]:text-sm">
                  {/* Displaying tyreInfo with proper line breaks */}
                  {productDescription.tyreInfo.split('\r\n').map((line: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              }
            </div>
          </div>
          <div className="product-detail-related flex flex-col gap-[33px] pl-[310px] pr-[206px] bg-white pb-[23px] max-[1846px]:px-[80px] max-[1024px]:pb-[82px] max-[1024px]:gap-[41px] max-[745px]:px-[16px] max-[643px]:items-center max-[400px]:gap-[25px] max-[1400px]:pb-[46px]">
            <div className="pdr-title w-full text-start max-[643px]:justify-center max-[643px]:flex max-[400px]:justify-start">
              <p className="text-2xl text-black font-semi-bold max-[1024px]:text-lg">Related products</p>
            </div>
            <div className="pdr-list grid grid-cols-4 gap-[28px] max-[948px]:grid-cols-3 max-[643px]:flex max-[643px]:flex-wrap max-[643px]:justify-center max-[400px]:gap-[14px]">
              {reproduct.length > 0 ? reproduct.map((relateproduct, i) => (
                i < 4 &&
                <div className="pp-product-list-main-product-pan flex flex-col" key={relateproduct.id}>
                  <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                    <div className="pp-product-list-mpp-image-outback absolute">
                      {/* {relateproduct.image.length > 30 ?
                        <Image alt="Car accessories image" src={relateproduct.image} width={176.52} height={238}></Image>
                        :
                        <Image alt="Car accessories image" src={`${backend_url}/uploads/tyreImg/${relateproduct.image}`} width={176.52} height={238}></Image>

                      } */}
                      {relateproduct.image.length === 0 ? (
                        <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                      ) : (
                        relateproduct.image.length > 30 && relateproduct.size == null ? (
                          <Image
                            alt="Car accessories image"
                            src={relateproduct.image === "" ? <></> : relateproduct.image}
                            width={176.52}
                            height={238}
                          />
                        ) : (
                          <Image
                            alt="Car accessories image"
                            src={`${backend_url}/uploads/tyreImg/${relateproduct.image}`}
                            width={176.52}
                            height={238}
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div className="pp-product-list-mpp-main-info w-[331px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px]">
                    <div className="pp-product-list-mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                      {relateproduct.recommended == 1 ?
                        <div className="pp-product-list-mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                          <p className="text-sm leading-5 font-normal font-['Inter'] text-white">Recommended</p>
                        </div> : <></>
                      }
                    </div>
                    <div className="pp-product-list-mmp-exact-info flex flex-col w-full h-[112px] items-center">
                      <p className="text-lg leading-7 font-semi-bold text-black">{relateproduct.brand}</p>
                      <p className="text-lg leading-7 font-semi-bold text-black line-clamp-1">{relateproduct.model}</p>
                      {relateproduct.size == "" || relateproduct.size == null ?
                        <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">{relateproduct.width}/{relateproduct.profile}-{relateproduct.inches} {relateproduct.load} {relateproduct.speed}</p>
                        :
                        <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">{relateproduct.size} {relateproduct.load} {relateproduct.speed}</p>
                      }
                    </div>
                    <div className="pp-product-list-mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                      <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                        <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                          <Tyre_Info_first />
                        </div>
                        <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                          <p className="uppercase text-sm leading-5 font-middle text-black">{relateproduct.fuel}</p>
                        </div>
                      </div>
                      <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                        <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                          <Tyre_Infor_second />
                        </div>
                        <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                          <p className="uppercase text-sm leading-5 font-middle text-black">{relateproduct.grip}</p>
                        </div>
                      </div>
                      <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                        <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                          <Tyre_Infor_third />
                        </div>
                        <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                          <p className="uppercase text-sm leading-5 font-middle text-black">{relateproduct.noise}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pp-product-list-mmp-price pt-[19px] flex flex-row justify-center">
                      <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK {relateproduct.price}</span></p>
                    </div>
                    <div className="pp-product-list-mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                      <div className="pp-product-list-mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018] cursor-pointer" onClick={() => { productPurchasePage(), handleAddToCart(relateproduct) }}>
                        <p className="text-base leading-6 font-normal font-['Inter'] uppercase text-white">BUY</p>
                      </div>
                      <div className="pp-product-list-mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888] cursor-pointer" onClick={() => goToDetailPage(relateproduct.id)}>
                        <p className="text-base leading-6 font-normal font-['Inter'] uppercase text-white">DETAILS</p>
                      </div>
                    </div>
                  </div>
                </div>

              )) : <></>}


            </div>
          </div>
          <Partner />

          <GetInTouch />
          <Footer />
          <BackToTop/>

        </div>
      </main >
    </div >

  ) : (
    <></>
  );
}
export default ProductDetail;
