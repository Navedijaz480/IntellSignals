import { useState } from "react";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { useAccount } from "wagmi";
import { IntellSignals_Abi, IntellSignals_address, Token_Abi, Token_Address } from "../Utils/Contract";
import Web3 from "web3";
import { toast } from "react-hot-toast";


const Plans = () => {
  const [spinner, setspinner] = useState(false)
  const [plan_data, setplan_data] = useState(0)
  const { address } = useAccount();

  const webSupply = new Web3("https://bsc-testnet.public.blastapi.io")

  const buyPackage = async (plan, amount) => {
    try {
      if (address) {

        if (plan == 0) {
          setspinner(true)
          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, webSupply.utils.toWei(amount.toString())],
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });
          toast.success("First transaction successfully Compeleted")
          setspinner(false)

          setTimeout(async () => {
            setspinner(true)

            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, webSupply.utils.toWei(amount.toString())],
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });
            toast.success("Great! You've successfully Buy Package🎉")
            setspinner(false)


          }, 2000);
        } else if (plan == 1) {
          setspinner(true)

          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, webSupply.utils.toWei(amount.toString())],
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });
          toast.success("First transaction successfully Compeleted")

          setTimeout(async () => {
            setspinner(true)

            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, webSupply.utils.toWei(amount.toString())],
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });
            toast.success("Great! You've successfully Buy Package🎉")
            setspinner(false)

          }, 2000);

        } else if (plan == 2) {
          setspinner(true)

          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, webSupply.utils.toWei(amount.toString())],
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });
          toast.success("First transaction successfully Compeleted")

          setTimeout(async () => {
            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, webSupply.utils.toWei(amount.toString())],
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });
            toast.success("Great! You've successfully Buy Package🎉")
            setspinner(false)

          }, 2000);

        } else if (plan == 3) {
          setspinner(true)

          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, webSupply.utils.toWei(amount.toString())],
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });
          toast.success("First transaction successfully Compeleted")

          setTimeout(async () => {
            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, webSupply.utils.toWei(amount.toString())],
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });
            toast.success("Great! You've successfully Buy Package🎉")
            setspinner(false)

          }, 2000);
        } else {
          setspinner(true)

          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, webSupply.utils.toWei(amount.toString())],
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });
          toast.success("First transaction successfully Compeleted")

          setTimeout(async () => {
            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, webSupply.utils.toWei(amount.toString())],
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });
            toast.success("Great! You've successfully Buy Package🎉")
            setspinner(false)

          }, 2000);
        }
      } else {
        toast.error("Please Connect Wallet First! ")
        setspinner(false)

      }

    } catch (error) {
      console.log(error);
      setspinner(false)

    }
  }

  return (
    <div className=" flex flex-col bg-gray-200 items-center py-8  w-full ">
      <h2 className="text-5xl py-4 font-bold text-black">Pricing</h2>
      <h3 className="text-xl pb-1 text-gray-700">
        You can start with a free trial Or Buy the VIP Pakage
      </h3>
      <div className="w-full  py-6 max-w-6xl flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-black">Regular Rates:</h2>
        <div className="flex py-6 flex-col items-center w-full md:flex-row md:items-stretch md:justify-center gap-8">
          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in mx-6">
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">Basic</p>
              <h3 className="text-white text-4xl font-bold ">Free</h3>
            </div>

            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">The perfect solution to try out</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">1</p>
                </div>
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">1</p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm">
                  <li>1 Free Signal per day</li>
                  <li>
                    Perfect for beginners and those looking to dip their toes
                    into crypto trading.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(0, 0), setplan_data(0))}
              >
                {
                  plan_data == 0 ?
                    spinner ? "Loading..." : "Buy Now"
                    : "Buy Now"

                }
              </button>
            </div>
          </div>

          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">Premium / Month</p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">$49 </h3>{" "}
              </div>
            </div>
            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">The perfect solution to try out</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">30</p>
                </div>
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">150</p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm ">
                  <li>5 Signals per day</li>
                  <li>Access to Premium signals</li>
                  <li>Opportunity to diversify your portfolio</li>
                  <li>
                    Ideal for traders seeking more signals and a competitive
                    edge.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(1, 10), setplan_data(1))}
              >
                {
                  plan_data == 1 ?
                    spinner ? "Loading..." : "Buy Now"
                    : "Buy Now"

                }
              </button>
            </div>
          </div>

          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">


            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">VIP / Month</p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">$99 </h3>{" "}
              </div>
            </div>



            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">The perfect solution to try out</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">30</p>
                </div>
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">Unlimited</p>
                </div>
              </div>
              <div className="pt-5">
                <ul className="list-none list-outside text-white text-sm">
                  <li>Unlimited Signals</li>
                  <li>One-to-One Coaching (up to 1 hour)</li>
                  <li>Custom Crypto Research Reports on Demand</li>
                  <li>
                    For serious traders wanting maximum insights, personalized
                    guidance, and research expertise.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">

              <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(2, 100), setplan_data(2))}

              >
                {
                  plan_data == 2 ?
                    spinner ? "Loading..." : "Buy Now"
                    : "Buy Now"

                }
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  py-6 max-w-6xl flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-black">
          Discounted Rates (3 Months Subscription):
        </h2>
        <div className="flex py-6 flex-col items-center w-full md:flex-row md:items-stretch md:justify-center gap-8">
          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
            {/* <div className="flex w-full justify-center ">
              <h3 className="text-white text-2xl font-bold ">
                Premium: $129/3 Months
              </h3>
            </div> */}
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">Premium / 3 Month</p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">$129 </h3>{" "}
              </div>
            </div>

            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">The perfect solution to try out</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">30</p>
                </div>
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">150</p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm">
                  <li>All benefits of Monthly Premium package</li>
                  <li>Discounted rate for 3 months</li>
                  <li>
                    A cost-effective choice for extended premium access and
                    savings.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(3, 15), setplan_data(3))}

              >
                {
                  plan_data == 3 ?
                    spinner ? "Loading..." : "Buy Now"
                    : "Buy Now"

                }
              </button>
            </div>
          </div>
          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">

            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">VIP / 3 Month</p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">$249 </h3>{" "}
              </div>
            </div>

            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">The perfect solution to try out</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">30</p>
                </div>
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">Unlimited</p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm ">
                  <li>All benefits of Monthly VIP package</li>
                  <li>Discounted rate for 3 months</li>
                  <li>
                    Premium features at a reduced rate for traders committed to
                    growth.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(4, 20), setplan_data(4))}

              >
                {
                  plan_data == 4 ?
                    spinner ? "Loading..." : "Buy Now"
                    : "Buy Now"

                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
