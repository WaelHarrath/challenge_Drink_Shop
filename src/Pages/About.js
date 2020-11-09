import React from "react";

function About() {
  return (
    <div className="about-container">
      <b>About</b>
      <br />
      <br /> TheCocktailDB was built in 2015 to provide a free data source api
      for drinks online <br />
      in the hope that developers would build applications and cool projects
      ontop of it. <br />
      TheCocktailDB originated on the{" "}
      <a href="https://forum.kodi.tv/showthread.php?tid=235298">
        Kodi forums
      </a>{" "}
      as a way to browse cocktail recipes on your TV.
      <br />
      <br />
      <img
        src="https://www.thecocktaildb.com/images/kodi_addon.jpg"
        alt="waystoBrowse"
      />
      <br />
      <br />
      There are also some supporting Apps
      <br />
      <b>JavaScript</b>{" "}
      <a href="https://www.npmjs.com/package/cocktail-api-search">link</a>
      <br />
      <br />
      Many developers have since contributed to the project and built apps on
      top of it. You can see some of them listed below:
      <br />
      <br />
      <a href="https://duckduckgo.com/?q=margarita+recipe&amp;t=h_&amp;ia=recipes">
        <img
          src="https://www.thecocktaildb.com/images/ddg.png"
          alt="duckduckgo"
        />
      </a>{" "}
      <a href="https://forum.kodi.tv/showthread.php?tid=238039">
        <img
          src="https://www.thecocktaildb.com/images/kodi_logo.png"
          alt="kodi"
        />
      </a>
      <br />
      <br />
      TheCocktailDB is also used by universities to tech web design and
      programming as it has an easy to use API and cool content.
      <br />
      <br />
      <img
        src="https://www.thecocktaildb.com/images/uni.png"
        alt="thecocktaildb"
      />
      <br />
    </div>
  );
}

export default About;
