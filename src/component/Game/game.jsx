import  { useEffect, useState } from "react";
import "./style.css";

const Gemify = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);

  const API_KEY = import.meta.env.VITE_APIKEY;
  const initialUrl = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2022-01-01,2022-12-31&ordering=-added`;

  const getPlatformStr = (platforms) => {
    const platformStr = platforms.map((pl) => pl.platform.name).join(", ");
    return platformStr.length > 30 ? platformStr.substring(0, 30) + "..." : platformStr;
  };

  const loadGames = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setGames((prevGames) => [...prevGames, ...data.results]);
      setNextUrl(data.next || null);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGames(initialUrl);
  }, []);

  return (
    <>
      {/* Preloader */}
      {!loading ? null : (
        <div id="js-preloader" className="js-preloader">
          <div className="preloader-inner">
            <span className="dot"></span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="most-popular">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      Most Popular Games
                    </h4>
                  </div>

                  {/* Games List */}
                  <div className="row gameList">
                    {games.map((game) => (
                      <div key={game.id} className="col-lg-3 col-md-6 col-sm-12">
                        <div className="item">
                          <img src={game.background_image} alt={game.name} />
                          <h4 className="game-name">
                            {game.name}
                            <br />
                            <span className="platforms">
                              {getPlatformStr(game.parent_platforms)}
                            </span>
                          </h4>
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>{" "}
                              <span className="rating">{game.rating}</span>
                            </li>
                            <li>
                              <i className="fa-regular fa-calendar"></i>{" "}
                              <span className="date">{game.released}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load More */}
                  {nextUrl && (
                    <div className="col-lg-12">
                      <div className="main-button">
                       <button onClick={() => loadGames(nextUrl)}>Load More Games</button>
                      </div>
                    </div>
                  )}

                  {!nextUrl && !loading && games.length > 0 && (
                    <div className="col-lg-12 text-center mt-4">
                      <p>All games loaded 🎮</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gemify;
