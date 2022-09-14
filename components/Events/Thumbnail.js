import Link from "next/link";

const Thumbnail = ({ event, eventType }) => {
  const { title, imageUrl, details, dateTime } = event;

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const user = localStorage.getItem("profile");
    const url = `/api/payment/generate-order`;
    const response = await fetch(url, {
      method: "POST",
      body: user,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const { email, name } = JSON.parse(user);

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.orderID,
      name: "Ticket Booking",
      description: title + " Event",
      image: "/LandingPage/Tab-Logo-Black.svg",
      handler: function (response) {
        console.log(response);
      },
      prefill: {
        name: name,
        email: email,
        phone_number: "",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="shadow-md h-36 w-60 mx-8 mb-16 pb-10 border-2 border-[#737373]">
      <div className="relative">
        <img src={imageUrl} className="h-36 w-60" />
        <div className="absolute top-2 left-2">{title}</div>
        {eventType === "live" && (
          <div className="absolute right-0 bottom-2" onClick={displayRazorpay}>
            <div className="rounded-2xl cursor-pointer hover:bg-red-600 hover:text-white bg-white text-black p-1 mr-2 font-semibold">
              Book Now
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#303030] p-1 pl-2 outline outline-2 outline-[#737373]">
        {details.substring(0, 50)}
        {details.length > 50 ? "...." : ""}&nbsp;&nbsp;
        <Link href="/">View More</Link>
      </div>
    </div>
  );
};

export default Thumbnail;
