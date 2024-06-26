function signinPage() {
    window.location.href = "SignIn/signIn.html"
}
//
var favChannels = [
    { img_url: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg" },
    { img_url: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg" },
    { img_url: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg" },
    { img_url: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/Hayu_logo_for_MLP_Grid.jpg" },
    { img_url: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg" },
    { img_url: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" },
    { img_url: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg" },
    { img_url: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg" },
    { img_url: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/ShortsTV-426X2944_V1.jpg" }
];

favChannels.map(function(elem) {
    var div = document.createElement('div');
    div.setAttribute("class", "channelDiv");

    var image = document.createElement("img");
    image.setAttribute("src", elem.img_url);

    div.append(image);
    document.querySelector(".channelBtn").append(div);
});

localStorage.setItem("favChannels", JSON.stringify(favChannels));