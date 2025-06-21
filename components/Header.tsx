import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import CartIcon from "./CartIcon";
import Container from "./Container";
import FavoriteButton from "./FavoriteButton";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";

const Header = async () => {
  const user = await currentUser();
  console.log("Current User:", user);
  return (
    <header className="sticky top-0 px-2 md:px-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="flex items-center">
          <MobileMenu />
          <Logo />
        </div>

        <div className="">
          <HeaderMenu />
        </div>

        <div className="flex items-center gap-2.5 md:gap-4 ">
          <SearchBar />
          <FavoriteButton />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
