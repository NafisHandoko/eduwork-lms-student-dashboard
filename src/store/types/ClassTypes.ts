import { UserType } from "./UserTypes";

export type ClassType = {
  id: number;
  mentors_id: number | null;
  title: string | null;
  slug: string | null;
  type: string | null;
  slide_subtitle1: string | null;
  slide_subtitle2: string | null;
  slide_deadline: string | null;
  date_event: string | null;
  img_thumb: string | null;
  img_slide: string | null;
  hero_image: string | null;
  link_intro_youtube: string | null;
  short_desc: string | null;
  long_desc: string | null;
  city_id: number | null;
  category_id: number | null;
  link_silabus: string | null;
  map: string | null;
  address: string | null;
  rating: number | null;
  info_registered: string | null;
  info_passed: string | null;
  info_works: string | null;
  sticky: number | null;
  status: string | null;
  show: number | null;
  commitment_fee: number | null;
  share_profit: number | null;
  curriculum_public: string | null;
  isa_price: number | null;
  regular_price: number | null;
  option_cicilan: string | null;
  option_penyaluran: string | null;
  option_offline: string | null;
  option_online: string | null;
  show_silabus: string | null;
  min_age: number | null;
  created_at: string | null;
  updated_at: string | null;
  max_age: number | null;
  contract: string | null;
  contract_review: string | null;
  auto_move_to: string | null;
  auto_move_messages: string | null;
  student_approved_status: number | null;
  student_approved_max: number | null;
  sertif_image: string | null;
  absentable: string | null;
  midtrans: string | null;
  strike_price: string | null;
  konsul_link: string | null;
  konsul_text: string | null;
  full_template: string | null;
  detail_page_type: string | null;
  automove_payment: string | null;
  mentor_task_load: string | null;
  mentor_live_mentoring: string | null;
  student_stuck_deadline: string | null;
  student_stuck_progress: string | null;
  student_stuck_class: string | null;
  start_at: string | null;
  total_student_not_start: number | null;
  fketerangan: string | null;
  gdocs: string | null;
  mentor_task_load_class: string | null;
  total_student_stuck_deadline: number | null;
  total_student_stuck_progress: number | null;
  total_student_stuck_class: number | null;
  start_live_mentoring_at: string | null;
  last_live_mentoring_at: string | null;
  total_live_mentoring: number | null;
  total_untracked_live_mentoring: number | null;
  automove_absent: string | null;
  mentor: UserType
}
export type CategoryType = {
  id: number;
  class_id: number | null;
  title: string | null;
  description: string | null;
  sort: number | null;
  price_percent: number | null;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  accessible: string | null;
}
export type CurriculumType = {
  id: number;
  curriculum_category_id: number | null;
  title: string | null;
  type: string | null;
  depency_id: number | null;
  description: string | null;
  filetype: string | null;
  file: string | null;
  sort: number | null;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  rating: string | null;
  duration: number | null;
  duration_type: string | null;
  day_at: string | null;
}

export type OtherMaterialType = {
  class_id: null | string;
  content: null | string;
  created_at: null | string;
  curriculum_id: null | number;
  id: number;
  rating: null | number;
  status: null | string;
  sticky: null | string;
  title: null | string | null;
  type: null | string;
  updated_at: null | string;
  mentor: UserType
}

export interface ClassStateInterface {
  class: Array<ClassType>,
  curriculum: Array<CurriculumType>,
  category: Array<CategoryType>,
  otherMaterial: Array<OtherMaterialType>
  loads: Array<string>,
  activeClass: {},
  activeCurriculum: null | number
}