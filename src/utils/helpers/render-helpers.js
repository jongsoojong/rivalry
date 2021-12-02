export const generateImage = (gameCharacters, characterValue) => {
    const image = gameCharacters.find((character) => {
        if(characterValue === character.id) 
            {
                return character
            }
        return false;
    }
    if(image) {
        return true; // return the image
    } return false; // return the defaultImage;
}


//Fix this up, on the right track.