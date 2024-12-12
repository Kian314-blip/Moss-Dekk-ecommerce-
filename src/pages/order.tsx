import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Main_Image from "@/components/Main_Image";
import Back_Image from "../../public/image/back_image.png";
import Product from "../../public/image/product_detail.png";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackToTop from "@/components/backToTop";
import axios from "axios";
import Small_Left_arrow from "@/svg/Small_left_arrow";
import LoadingComponent from "@/components/onLoad"
const inter = Inter({ subsets: ["latin"] });
const backend_url = process.env.NEXT_PUBLIC_API_URL

interface MiscDetails {
  managementWorkOrderID: number;
  paymentMode: string;
  orgNr: string;
  reference: string;
  model: string;
  season: string;
  runFlat: string;
  load: string;
  category: string;
  varenr: string;
}
interface Order {
  id: string;
  orderID: string;
  orderedOn: string;
  name: string;
  regNr: string;
  brand: string;
  changeDate: string;
  customerID: string;
  email: string;
  misc: MiscDetails | string // This will be parsed into an object
  mobile: string;
  price: string;
  size: string;
  status: string;
  tyreID: string;
  tyres: string;
}

export default function Order() {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [orders, setOrders] = useState<Order[]>([]);

  const [totalCount, setTotalCount] = useState<any>(0);
  const [date, setDate] = useState<string>();
  const router = useRouter();
  const RegNr = localStorage.getItem("regNr");
  const { day } = router.query;
  const { time } = router.query;
  const { envprice } = router.query;
  const { totalPrice } = router.query;
  const calculateTotalPurchaseAmount = (items: { purchaseAmount: number }[]) => {
    return items.reduce((total, item) => total + item.purchaseAmount, 0);
  };
  const getOrderInfor = async () => {
    try {
      const formDataParams = new URLSearchParams();
      formDataParams.append('method', 'getOrderInfor');
      formDataParams.append('regNr', `${RegNr}`);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/queryNewSite.php`,
        formDataParams,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      const data: Order[] = response.data;
      setOrders(data)
      const parsedOrders = data.map(order => ({
        ...order,
        misc: typeof order.misc === 'string' ? JSON.parse(order.misc) : order.misc,
      }));
      setOrders(parsedOrders);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    const totalPurchaseAmount = calculateTotalPurchaseAmount(cartItems);
    const envPriceNumber = Number(envprice); // or parseFloat(envprice)
    const totalTaxPrice = totalPurchaseAmount * envPriceNumber;
    setTotalCount(totalTaxPrice);
  }, [cartItems, envprice]);
  useEffect(() => {
    if (day && time) {
      const fullDate = `${day} ${time}`;
      console.log("Full Date String:", fullDate);

      // Create a Date object
      const newDate = new Date(fullDate);

      // Format the date to "13 May 2024" (British style)
      const formattedDate = newDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

      // Set the formatted date
      setDate(formattedDate);
    }
  }, [day, time]);
  const goHomePage = () => {

    window.location.href = "/"
  }
  useEffect(() => {
    getOrderInfor();
  })
  return (

    <div className="home-container flex flex-col">

      <Header />
      <main style={{ width: "100%" }}>
        <div className="main-container flex flex-col justify-center w-[100%]">
          <Main_Image />
          <div className="flex flex-row w-full h-auto pt-[87px] pb-[156.5px] pl-[317px] pr-[310px] bg-white gap-[29px] max-[1700px]:pl-[100px] max-[1700px]:pr-[69px] max-[1700px]:pt-[47px] max-[1770px]:pb-[92px] max-[850px]:px-4 max-[850px]:pt-4 max-[850px]:pb-[43px] max-[700px]:flex-col max-[700px]:items-center">
            <div className="flex flex-col w-[606px] h-[338px] max-[850px]:h-auto max-[700px]:w-[343px]" onClick={goHomePage}>
              <div className="pcp-title flex flex-row gap-[10px] items-center cursor-pointer py-3">
                <Small_Left_arrow />
                <p className="text-lg leading-7 font-normal font-['Inter'] text-black max-[1227px]:text-sm">Fortsette å handle</p>
              </div>
              <div className="flex w-full h-auto gap-[45px] flex-col max-[700px]:gap-4 pt-[215px] max-[1250px]:pt-[103px] max-[850px]:pt-[100px] max-[700px]:pt-0">
                <div className="text-5xl leading-none font-semi-bold text-[#73C018] max-[1250px]:text-3xl max-[1250px]:leading-9">
                  Takk for din Bestilling!
                </div>
                <div className="text-lg leading-7 font-normal text-black max-[1250px]:text-sm max-[1250px]:leading-5">
                  Bestillingen din er nå automatisk behandlet og vi ser frem til å møte deg til avtalt tid
                  i vår topp moderne og automatiske monterings anlegg i Skreddervein 5 , 1537 Moss<br />
                  Alle priser er inkludert mva
                </div>
                {orders.length > 0 && orders.map((order) => (
                  <div className="flex flex-col w-full h-auto text-lg leading-7 font-medium max-[1250px]:text-sm max-[1250px]:leading-5" key={order.id}>
                    <div className="text-zinc-500">
                      Order number:{" "}
                      <div className="text-lg font-semi-bold text-black leading-7 max-[1250px]:text-sm max-[1250px]:leading-5">
                        {typeof order.misc === 'object' && 'managementWorkOrderID' in order.misc && order.misc.managementWorkOrderID}
                      </div>
                    </div>
                    <div className="text-zinc-500">
                      Date:{" "}
                      <div className="text-lg font-semi-bold text-black leading-7 max-[1250px]:text-sm max-[1250px]:leading-5">
                        {order.changeDate}
                      </div>
                    </div>
                    <div className="text-zinc-500">
                      Total:{" "}
                      <div className="text-lg font-semi-bold text-black leading-7 max-[1250px]:text-sm max-[1250px]:leading-5">
                        Nok {order.price} / stk
                      </div>
                    </div>
                    <div className="text-zinc-500">
                      Payment method:{" "}
                      <div className="text-lg font-semi-bold text-black leading-7  max-[1250px]:text-sm max-[1250px]:leading-5">
                        {typeof order.misc === 'object' && 'paymentMode' in order.misc && order.misc.paymentMode}
                      </div>
                    </div>
                  </div>

                ))}
              </div>
            </div>
            <div className="flex flex-col w-[658px] h-[750.5px] items-center relative max-[1250px]:w-[435px] max-[1250px]:h-[496px] max-[700px]:h-[390px] max-[700px]:w-[343px]">
              <div className="flex w-[658px] h-[33px] bg-[#EBEBEB] rounded-full z-0 max-[1250px]:w-[435px] max-[700px]:w-[343px] max-[700px]:h-[18px]"></div>
              <div className="flex w-[625px] h-[732.5px] top-[18px] z-10 absolute max-[1250px]:w-[413px] max-[1250px]:h-[484px] max-[700px]:w-[325px] max-[700px]:pb-0 max-[700px]:top-[9px]">
                <Image
                  alt="blackimage"
                  className="w-full h-full absolute max-[700px]:h-[381px]"
                  src={Back_Image}
                ></Image>
                <div className="flex flex-col w-full h-full px-[32.5px] pt-[37px] pb-[83.5px] z-[15] max-[1250px]:pt-6 max-[1250px]:pl-[22px] max-[700px]:px-[11px] max-[700px]:pt-[17px] max-[700px]:pb-[10px]">
                  <div className="flex text-3xl leading-9 font-semi-bold text-black pb-[34px] border-b border-b-solid border-b-[#aaa] max-[1250px]:text-xl max-[1250px]:leading-7 max-[1250px]:pb-[22px] max-[700px]:text-lg max-[700px]:pb-[19px]">
                    Order Summary
                  </div>
                  {orders.length > 0 && orders.map((order) => (

                    <div className="flex flex-row w-full h-25 justify-center items-center py-[22px] max-[1250px]:py-[15px] max-[700px]:py-[11px]" key={order.id}>
                      <div className="flex flex-col w-auto h-auto pr-[42px] border-r border-r-solid border-r-[#aaa] max-[1250px]:pr-[12px] max-[700px]:pr-[6px]">
                        <div className="text-lg leading-7 font-medium text-zinc-500 max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                          Date
                        </div>
                        <div className="text-lg leding-7 font-medium text-black max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                          {order.changeDate}
                        </div>
                      </div>
                      <div className="flex flex-col w-auto h-auto pr-[16px] pl-7 border-r border-r-solid border-r-[#aaa] max-[1250px]:pl-2 max-[1250px]:pr-[6px]">
                        <div className="text-lg leading-7 font-medium text-zinc-500 max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                          Order Number
                        </div>
                        <div className="text-lg leding-7 font-medium text-black max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                          {typeof order.misc === 'object' && 'managementWorkOrderID' in order.misc && order.misc.managementWorkOrderID}
                        </div>
                      </div>
                      <div className="flex flex-col w-auto h-auto pl-[25px] max-[1250px]:pl-4">
                        <div className="text-lg leading-7 font-medium text-zinc-500 max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                          Payment Method
                        </div>
                        <div className="text-lg leding-7 font-medium text-black max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                          {typeof order.misc === 'object' && 'paymentMode' in order.misc && order.misc.paymentMode}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex border-b border-dashed border-b-[#aaa] mx-[-5px]"></div>
                  {cartItems.map((product) => (
                    <div className="flex flex-row justify-between w-full h-auto pt-[33px] pb-[150px] border-b border-b-solid border-b-[#aaa]  max-[1250px]:pt-[21px] max-[1250px]:pb-11 max-[700px]:pt-5 max-[700px]:pb-[31px]" key={product.id}>
                      <div className="flex flex-row justify-between w-[260px] max-[1250px]:w-auto max-[1250px]:gap-[11px]">
                        <div className="flex justify-center items-center w-[93px] h-[93px] bg-[#D9D9D9] rounded-lg max-[1250px]:w-[68px] max-[1250px]:h-[68px] max-[700px]:w-[52px] max-[700px]:h-[52px]">
                          {product.image.length === 0 ? (
                            <div className="text-sm leading-5 font-normal font-['Inter'] text-black text-center max-[716px]:text-xs">No Product Image</div>
                          ) : (
                            product?.image && product.image.length > 30 ?
                              <Image
                                alt=" product image"
                                src={Product}
                                className="w-[52px] h-[82px] max-[1250px]:w-10 max-[1250px]:h-[61px] max-[700px]:w-[31px] max-[700px]:h-[48px]"
                                width={52}
                                height={82}
                              ></Image>
                              :
                              <Image
                                alt=" product image"
                                src={`${backend_url}/uploads/tyreImg/${product.image}`}
                                width={52}
                                height={82}
                                className="w-[52px] h-[82px] max-[1250px]:w-10 max-[1250px]:h-[61px] max-[700px]:w-[31px] max-[700px]:h-[48px]"
                              ></Image>
                          )}

                        </div>
                        <div className="flex flex-col w-auto h-auto text-sm leading-5 font-medium text-[#787881] pt-[10px] max-[1250px]:text-xs max-[1250px]:leading-4 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4 max-[700px]:pt-0">
                          <div className="flex pb-[5px]  max-[700px]:pb-0">VERKSTED MATRIELL</div>
                          <div className="flex">
                            Pack: {product.category}
                            <br />
                            Qty: {product.purchaseAmount}
                          </div>
                        </div>
                      </div>
                      <div className="flex pt-[5px] w-auto">
                        <div className="text-lg leading-7 font-semi-bold text-black max-[1250px]:text-sm max-[1250px]:leading-5 max-[700px]:text-sm max-[700px]:leading-5">
                          Nok {product.price} / stk
                        </div>
                      </div>
                    </div>

                  ))}
                  <div className="flex flex-row justify-between w-full h-auto pt-[13px] pb-[48px] text-[#aaa] border-b border-b-solid border-b-[#aaa] max-[1250px]:pt-2 max-[1250px]:pb-[25px] max-[700px]:pt-[6px] max-[700px]:pb-[25px]">
                    <div className="flex flex-col text-lg leading-7 gap-[7px] font-medium max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-sm max-[700px]:leading-5">
                      <div className="flex">Sub TotalMiljøavgift</div>
                      <div className="flex">Miljøavgift</div>
                    </div>
                    <div className="flex flex-col text-lg leading-7 w-auto font-medium gap-[7px] max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-sm max-[700px]:leading-5">
                      <div className="flex w-full justify-end">Nok {totalCount} / stk</div>
                      <div className="flex justify-end w-full">Nok {envprice} / stk</div>
                    </div>
                  </div>
                  {orders.length > 0 && orders.map((order) => (

                    <div className="flex justify-between pt-[10px] w-full h-auto" key={order.id}>
                      <div className="flex text-2xl leading-8 font-semi-bold text-black max-[1250px]:text-lg max-[1250px]:leading-7">
                        Order Total
                      </div>
                      <div className="flex text-2xl leading-8 font-semi-bold text-black max-[1250px]:text-lg max-[1250px]:leading-7">
                        Nok {order.price} / stk
                      </div>
                    </div>
                  ))} 
                </div>
              </div>
            </div>
          </div>
          <Partner />
          <Footer />
          <BackToTop />
          {loading && <LoadingComponent />}
        </div>
      </main>
    </div>
  );
}
