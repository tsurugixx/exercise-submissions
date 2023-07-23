const $searchBox = $("#search");
const $contentSection = $("#content-section");

function placeContent(results) {
    console.log(results);
    let resultsLen = results.data.length;
    console.log(resultsLen);
    if (resultsLen > 0) {
        let randomGif = (Math.floor(Math.random() * resultsLen));
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
            src: results.data[randomGif].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $contentSection.append($newCol);
    };
};


    $("form").on("submit", async function (evt) {
        evt.preventDefault();

        let searchTerm = $searchBox.val();
        $searchBox.val("");
        console.log(searchTerm)

        const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
            params: {
                q: searchTerm,
                api_key: "SchkyEvH8xnhVfKoxHTGPBhwkJ7A5Ctz"
            }
        });
        placeContent(response.data);
    });

