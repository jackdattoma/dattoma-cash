export default function App() {
  return (
    React.createElement("div", {className: "min-h-screen bg-white text-black font-sans"}, 
      React.createElement("header", {className: "p-6 shadow-md flex justify-between items-center"},
        React.createElement("h1", {className: "text-2xl font-bold"}, "DATTOMA CASH L.L.C."),
        React.createElement("a", {href: "#sell", className: "bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"}, "Get a Cash Offer Now")
      ),
      React.createElement("main", {className: "p-6 space-y-16"},
        React.createElement("section", {className: "text-center space-y-4"},
          React.createElement("h2", {className: "text-3xl font-bold"}, "We Buy Houses Nationwide"),
          React.createElement("p", {className: "text-lg"}, "Sell your house fast, no agents, no fees, no repairs. Get a fair cash offer today."),
          React.createElement("a", {href: "#sell", className: "inline-block mt-4 bg-black text-white px-6 py-3 rounded-xl text-lg"}, "Get a Cash Offer Now")
        )
      ),
      React.createElement("footer", {className: "mt-16 p-6 text-center text-gray-500 text-sm"}, 
        `© ${new Date().getFullYear()} DATTOMA CASH L.L.C. All rights reserved.`
      )
    )
  );
}