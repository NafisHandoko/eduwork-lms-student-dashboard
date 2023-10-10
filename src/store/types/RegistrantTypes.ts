
export type RegistrantType = {
  additional_payment_method: null | string;
  after_lead_ads: null | number;
  after_submit_ads: null | number;
  alert_progress_late_message: null | string;
  berkas_save: null | string;
  bukti_pembayaran: null | string;
  class_id: null | number;
  class_packet_id: null | number;
  class_progress: null | number;
  code: null | string;
  commitment: null | number;
  commitment_fee: null | number;
  commitment_fee_terbayar: null | number;
  confirm_date: null | string;
  contract: null | string;
  contract_review: null | string;
  created_at: null | string;
  credit_not_paid: null | number;
  credit_status: null | string;
  deleted_at: null | string;
  document_dikirim: null | string;
  document_diterima: null | string;
  document_resi: null | string;
  finish_class: null | number;
  freeup_at: null | string;
  id: null | number;
  interview: null | string;
  jaminan_ijazah: null | string;
  jaminan_kontak: null | string;
  jaminan_mou: null | string;
  jaminan_other: null | string;
  jaminan_uang: null | string;
  last_follow_up: null | string;
  latest_student_progress_date: null | string;
  mentor_curriculum_position: null | string;
  mentor_note: null | string;
  mentor_progress: null | number;
  monitor_student_note: null | string;
  note: null | string;
  payment_method: null | string;
  payment_minus: null | number;
  payment_note: null | string;
  payment_plus: null | number;
  progress: null | number;
  r_progress: null | number;
  rating: null | number;
  rclass_progress: null | number;
  registrant_reference: null | string;
  reject_reason: null | string;
  rmentor_progress: null | number;
  show: null | string;
  sikon: null | string;
  skill: null | string;
  sort: null | number;
  start_class_at: null | string;
  status: null | string;
  status_doc: null | string;
  status_ijazah: null | string;
  status_sertifikat: null | string;
  status_transfer: null | string;
  student_id: null | number;
  target_late_curriculum: null | number;
  target_next_curriculum: null | number;
  tenor: null | number;
  test_question_count: null | number;
  time_move_approved: null | string;
  time_move_graduation: null | string;
  time_move_to_paid: null | string;
  total_price: null | number;
  type_class: null | string;
  update_status_date: null | string;
  updated_at: null | string;
  voucher_code: null | string;
  voucher_id: null | number;
}

export type ProgressType = {
  class_id: null | number;
  created_at: null | string;
  curriculum_id: null | number;
  deleted_at: null | string | null;
  id: number;
  registrant_id: null | number;
  status: null | string;
  student_id: null | number;
  updated_at: null | string;
}

export type TaskType = {
  answer: null | string;
  class_id: null | number;
  created_at: null | string;
  curriculum_id: null | number;
  deadline: null | number;
  deadline_date: null | string;
  deadline_hour: null | string | null;
  description: null | string;
  id: number;
  registrant_id: null | number;
  required: null | boolean | null;
  sort: null | number;
  status: null | string;
  student_id: null | number;
  submit_date: null | string | null;
  title: null | string;
  updated_at: null | string;
}

export interface RegistrantInterface {
  loads: Array<string>
  registrant: Array<RegistrantType>,
  progress: Array<ProgressType>
  task: Array<TaskType>
}