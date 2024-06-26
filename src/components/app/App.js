import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));

const App = () => {
	return (
		<Router>
			<div className="app">
				<ErrorBoundary>
					<AppHeader />
				</ErrorBoundary>
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path="/" element={<MainPage />} />
							<Route path="/comics" element={<ComicsPage />} />
							<Route
								path="/comics/:codename"
								element={<SingleComicPage />}
							/>
							<Route path="*" element={<Page404 />} />
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	);
};

export default App;
