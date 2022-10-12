
export const TicketSelection = ({ displayRazorpay, setDisplay, setnumTickets, eventInfo, numTickets }) => {

    console.log(eventInfo);
    const count = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="relative">
            <div className="fixed z-10 left-[12%] sm:left-[25%] md:left-[30%] lg:left-[35%] ">
                {/* <div className='absolute top-[6vh] sm:top-[8vh] md:top-[12vh]'> */}
                <div className='absolute top-[6vh] sm:top-[8vh] md:top-[0vh]'>
                    {/* <div className='bg-[#303030] w-80 sm:w-96 rounded p-4'> */}
                    <div className='bg-[#303030] w-80 sm:w-96 rounded p-4 h-[70vh] overflow-x-hidden overflow-y-auto customScrollbar'>

                        {/* Location of the event */}
                        <div className="flex justify-between text-sm sm:text-md mb-4">
                            <div className='flex'>
                                <img className="mr-4" src="/SingleEvent/map-pin.svg" />
                                {eventInfo?.venue}
                            </div>
                            <div className='cursor-pointer' onClick={() => {
                                setDisplay(false);
                                setnumTickets(1);
                            }}>x</div>
                        </div>

                        <div>How many tickets ?</div>
                        <div>
                        {/* Options for number of tickets */}
                        <div className='flex'>
                                {count.map((val, idx) =>
                                    <div key={idx} onClick={() => setnumTickets(val)} className={`rounded-full px-2 m-1 sm:p-0.5 sm:px-2.5 sm:m-2 cursor-pointer ${val === numTickets ? 'ticketBoxhover' : 'ticketBox'}`}>{val}</div>)}
                            </div>
                        {/* Auto Svg */}
                        <div className='flex justify-end'>
                                <img src="/Tickets/auto.svg" className='m-1' />
                            </div>
                        </div>
                        <div className='bg-[#404040]'>
                            {/* Individual Ticket Price */}
                            <div className='p-2 flex justify-between'>
                                {/* <div>Ticket price</div> */}
                                <div>Price for a ticket</div>
                                <div>₹ {eventInfo?.price}</div>
                            </div>
                            {/*  Total Payable Amount*/}
                            <div className='p-2 flex justify-between'>
                                <div>Total Payable Amount</div>
                                <div>₹ {eventInfo?.price * numTickets}</div>
                            </div>
                        </div>
                        {/* <div className='flex justify-around'>
                            <button className="bg-red-600 text-lg ml-4 rounded mt-4 px-6 py-1" onClick={() => displayRazorpay()}>Continue</button>
                        </div> */}
                        <div className="mt-2">Please pay the total amount using below QR code: </div>
                        <div className="flex justify-around mt-4"><img src="/Tickets/QRCode.jpeg" className="h-48" /></div>

                        <div className="flex justify-center">
                            <div className="bg-red-600 mt-2 p-1 rounded text-center text-sm hover:bg-red-400 transition-all">
                                <a href="https://forms.gle/Rf9DY7tSqtQigdep9" className="text-white">Fill this form in order to receive your ticket</a>
                            </div>
                            {/* <a ></a></div> */}
                         </div>   
                        <div className="mt-2 text-xs"><u>Note:</u> It may take time for the ticket to appear on your dashboard. We will also be mailing the tickets to you 1-2 days before the event.</div>

                    </div>
                </div>
            </div>
        </div>)
}