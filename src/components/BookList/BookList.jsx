import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import "./BookList.css";
import { useDispatch, useSelector } from "react-redux";
import { bookActions, hahaFun } from "../../redux/slices/eBookSlice";

const BookList = () => {
	const eBooks = useSelector(hahaFun);
	const dispatch = useDispatch();
	const titleFilter = useSelector((state) => state.filter.title);
	const autherFilter = useSelector((state) => state.auther.auther);

	function toggleFavoriteHandler(id) {
		dispatch(bookActions.toggleFavoriteBook(id));
	}

	function deleteBookHandler(id) {
		dispatch(bookActions.deleteBook(id));
	}

	const filteredBooks = eBooks.filter((book) => {
		const matchesTitle = book.title
			.toLowerCase()
			.includes(titleFilter.toLowerCase());
		const matchesAuthor = book.author
			.toLowerCase()
			.includes(autherFilter.toLowerCase());
		// const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
		return matchesTitle && matchesAuthor;
		// && matchesAuthor && matchesFavorite;
	});

	const highlightMatch = (text, filter) => {
		if (!filter) return text;

		const regex = new RegExp(`(${filter})`, "gi");

		return text.split(regex).map((substring, i) => {
			if (substring.toLowerCase() === filter.toLowerCase()) {
				return (
					<span key={i} className="highlight">
						{substring}
					</span>
				);
			}
			return substring;
		});
	};

	return (
		<div className="app-block book-list">
			<h2>Book List</h2>
			{eBooks.lenght === 0 ? (
				<p>No books available</p>
			) : (
				<ul>
					{filteredBooks.map((book, i) => (
						<li key={book.id}>
							<div className="book-info">
								{++i}. {highlightMatch(book.title, titleFilter)} by{" "}
								<strong>{highlightMatch(book.author, autherFilter)}</strong> (
								{book.source})
							</div>
							<div className="book-actions">
								<span>
									{book.isFavorite ? (
										<BsBookmarkStarFill
											className="star-icon"
											onClick={() => toggleFavoriteHandler(book.id)}
										/>
									) : (
										<BsBookmarkStar
											className="star-icon"
											onClick={() => toggleFavoriteHandler(book.id)}
										/>
									)}
								</span>
								<button onClick={() => deleteBookHandler(book.id)}>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default BookList;
