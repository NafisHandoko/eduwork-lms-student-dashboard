import { HiPlus, HiStar, HiXMark } from "react-icons/hi2"
import { useState, Dispatch, SetStateAction, MouseEventHandler, useEffect } from 'react'
import Button from "../../atoms/button"
import Dropdown from "../../atoms/dropdown"
import { AppDispatch } from "@/src/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewCurriculumApi } from "@/src/api/classApi";
import { classActiveCurriculum, classLoading, classReviewCurriculumAll } from "@/src/store/classSlice";
import { ReviewCurriculumType } from "@/src/store/types/ClassTypes";
import moment from "moment";
import { createId, profilePhoto } from "@/src/utils/helper";
import Skeleton from "../../molecules/skeleton";

interface ReviewModalProps {
    modalDismissed: boolean;
    setModalDismissed: Dispatch<SetStateAction<boolean>>;
    onConfirm?: MouseEventHandler
}

function ReviewModal({ modalDismissed, setModalDismissed, onConfirm = () => { } }: ReviewModalProps) {
    const [kritikSaran, setKritikSaran] = useState('')

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-[999] bg-black bg-opacity-50 ${modalDismissed ? 'hidden' : ''}`}>
            <div className="bg-white rounded-lg flex flex-col w-full md:w-1/3">
                <div className="flex flex-col gap-4 p-5">
                    <div className="flex flex-row gap-2 items-center justify-between">
                        <h1 className="text-neutral-90 text-xl font-medium">Review Materi</h1>
                        <button onClick={() => setModalDismissed(true)}><HiXMark /></button>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span>Rating :</span>
                        <div className="flex flex-row items-center gap-1">
                            <HiStar className="text-secondary-main" />
                            <HiStar className="text-secondary-main" />
                            <HiStar className="text-secondary-main" />
                            <HiStar className="text-secondary-main" />
                            <HiStar className="text-neutral-40" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span>Kritik & Saran</span>
                        <textarea
                            className="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
                            placeholder="Tulis kritik dan saran di sini..."
                            value={kritikSaran}
                            onChange={(e) => setKritikSaran(e.target.value)}
                            rows={5}
                        />

                    </div>
                </div>
                <div className="bg-neutral-20 flex flex-col p-5 rounded-b-lg">
                    <div className="flex flex-row items-center justify-between gap-2">
                        <button className="bg-secondary-main text-sm text-white px-4 py-2 rounded-lg">Complain</button>
                        <div className="flex flex-row gap-3">
                            <button className="bg-white text-sm text-neutral-90 px-4 py-2 rounded-lg" onClick={() => setModalDismissed(true)}>Close</button>
                            <button className={`bg-primary-main text-sm text-white px-4 py-2 rounded-lg`} onClick={onConfirm}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ReviewCard({reviewItem}: {reviewItem: ReviewCurriculumType}) {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <div className="bg-white shadow border border-gray-200 rounded-lg flex flex-row items-stretch p-3 gap-5 w-full">
            <div className="bg-center bg-cover w-[96px] h-[96px] rounded-full flex-shrink-0" style={{ backgroundImage: `url(${profilePhoto(reviewItem.student)})` }}></div>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex space-x-3 items-center">
                  <span className="text-text-heading font-medium text-lg">{reviewItem.student.name}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-sm text-[#989898]">{moment(reviewItem.updated_at).fromNow()}</span>
                </div>
                <div className="flex flex-row items-center gap-1">
                  {
                    [1,2,3,4,5].map(item => (
                      <HiStar key={item} className={`${(reviewItem.rating ?? 0) > item ? 'text-secondary-main': 'text-neutral-40'}`} />
                    ))
                  }
                </div>
                <p className="text-text-paragraph">{reviewItem.saran?.replace(/(<([^>]+)>)/gi, '')}</p>
            </div>
        </div>
    )
}

export default function Reviews() {
  const dispatch: AppDispatch = useDispatch()
  const [modalDismissed, setModalDismissed] = useState<boolean>(true)
  const reviewCurriculum = useSelector(classReviewCurriculumAll)
  const [ratingsviews,setRatingsviews] = useState<Array<Record<any,any>>>([])
  const [totalReviewer,setTotalReviewer] = useState<number>(0)
  const activeCurriculum = useSelector(classActiveCurriculum)
  const loading = useSelector(classLoading).includes("fetch_review_curriculum")

  // Define the number of items to display per page
  const itemsPerPage = 5;

  // Define the current page (e.g., as a state variable in your React component)
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the starting index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Slice the array to get the items for the current page
  const itemsOnCurrentPage = reviewCurriculum.slice(startIndex, startIndex + itemsPerPage);
  
  const getTotalRating = (rating: number) => {
    const filteredData = reviewCurriculum.filter(item => item.rating == rating);
    return filteredData.length;
  };

  const getAverageRating = () => {
    const totalRatings = reviewCurriculum.reduce((accumulator, item) => accumulator + (item.rating || 0), 0);
    const totalReviews = reviewCurriculum.length;

    if (totalReviews === 0) {
        return 0; // Avoid division by zero
    }

    const averageRating = totalRatings / totalReviews;
    return averageRating;
  };


  useEffect(() => {
    setRatingsviews([
      {label: 5, total: getTotalRating(5)},
      {label: 4, total: getTotalRating(4)},
      {label: 3, total: getTotalRating(3)},
      {label: 2, total: getTotalRating(2)},
      {label: 1, total: getTotalRating(1)}
    ])
  }, [reviewCurriculum])

  useEffect(() => {
    if (activeCurriculum && reviewCurriculum.length == 0) {
      dispatch(fetchReviewCurriculumApi({
        payload: {
          curriculum_id: activeCurriculum as unknown as number
        }
      }))
    }
    setCurrentPage(1)
  }, [activeCurriculum])

  useEffect(() => {
    if (ratingsviews.length > 0) {
      setTotalReviewer(
        ratingsviews.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.total;
        }, 0)
      )
    }
  }, [ratingsviews])

  return (
    <div className="px-7 flex flex-col gap-5 items-start">
      <div className="grid grid-cols-3 divide-x w-full">
        <div className="space-y-2 px-6 flex flex-col justify-center">
          <div className="text-2xl font-semibold text-start">Total Ulasan</div>
          <div className="flex items-center justify-start space-x-2">
            <div className="text-3xl font-semibold">{
              loading ?
              <Skeleton className="h-[36px] w-[36px] rounded-lg" />:
              totalReviewer
            }</div>
            {
              totalReviewer > 0 &&
              <div className="bg-green-200 rounded-full px-3 py-1">{totalReviewer > 0 ? Math.floor(Math.random() * 20) + 1: 0}%</div>
            }
          </div>
          <div className="text-start text-sm text-gray-600">Growth in Reviews On This Year</div>
        </div>
        <div className="space-y-2 px-6 flex flex-col justify-center">
          <div className="text-2xl font-semibold text-center">Average Rating</div>
          <div className="flex items-center justify-center space-x-2">
            <div className="text-3xl font-semibold">
              {
                loading ?
                <Skeleton className="h-[36px] w-[36px] rounded-lg" />:
                getAverageRating().toFixed(1)
              }
            </div>
            <div className="flex items-center text-yellow-400">
              <HiStar className="h-5 w-5" />
              <HiStar className="h-5 w-5" />
              <HiStar className="h-5 w-5" />
              <HiStar className="h-5 w-5" />
              <HiStar className="h-5 w-5 text-gray-300" />
            </div>
          </div>
          <div className="text-center text-sm text-gray-600">Average Rating On This Year</div>
        </div>
        <div className="space-y-2 px-6 flex flex-col justify-center">
          <div className="w-full text-center mx-auto space-y-2 flex flex-col items-center justify-center">
            {
              ratingsviews.map(item => (
                <div className="flex items-center justify-center space-x-2 w-full" key={item.label}>
                  <span className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span className="text-lg flex-shrink-0">{item.label}</span>
                  <div className="w-full relative">
                    {
                      loading ?
                      <Skeleton className={`h-2 rounded-full block w-full`} />:
                      <>
                        <span className={`h-2 bg-gray-50 rounded-full block w-full z-10`}></span>
                        <span className={`h-2 bg-blue-600 rounded-full z-20 absolute top-0 left-0`} style={{width: `${(item.total/(totalReviewer)) * 100}%`}}></span>
                      </>
                    }
                  </div>
                  <span className="text-lg flex-shrink-0">
                    {
                      loading ?
                      <Skeleton className="w-4 h-4 rounded-lg" />:
                      item.total
                    }
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {
        loading ?
        createId(4).map(item => (
          <div key={item.id} className="flex p-3 space-x-2 w-full">
            <Skeleton className="w-[96px] h-[96px] rounded-full flex-shrink-0" />
            <div className="flex flex-col gap-2 w-full">
                <div className="flex space-x-3 items-center">
                  <span className="text-text-heading font-medium text-lg"><Skeleton className="h-[27px] w-[150px] rounded-full" /></span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-sm text-[#989898]"><Skeleton className="h-[27px] w-[100px] rounded-full" /></span>
                </div>
                <div className="flex flex-row items-center gap-1">
                  {
                    [1,2,3,4,5].map(item => (
                      <Skeleton className="h-[13px] w-[13px] rounded-full"  key={item}/>
                    ))
                  }
                </div>
                <p className="text-text-paragraph"><Skeleton className={`w-full h-[100px] rounded-lg`} /></p>
            </div>
          </div>
        )):
        itemsOnCurrentPage.map(item => (
          <ReviewCard key={item.id} reviewItem={item} />
        ))
      }

      {
        reviewCurriculum.length == 0 &&
        <div className="text-center text-gray-500 w-full pb-8">Belum Ada Review.</div>
      }

      {
        <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover-bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            {/* Render pagination links based on the total number of items */}
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              {/* Render pagination links dynamically */}
              {Array.from({ length: Math.ceil(reviewCurriculum.length / itemsPerPage) }).map((_, index) => (
                <a
                  key={index}
                  href="#"
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    currentPage === index + 1
                      ? 'bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover-bg-gray-50 focus:z-20 focus:outline-offset-0'
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </a>
              ))}
            </nav>
          </div>
        </div>      
      }

    </div>
  )
}
