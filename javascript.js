// Merged content from script.js
// Mapping of difficulties to conditions and interventions
const difficultyMap = {
    reading: {
        condition: `Dyslexia`, 
        intervention: `Use phonics_based teaching methods. Provide audiobooks and text_to_speech tools. Give extra time for reading and assignments. Multi_sensory learning (visual, auditory, and kinesthetic methods)` },
    Spelling: {
        condition: `Dyslexia`,  
        intervention: `Use phonics_based teaching methods. Provide audiobooks and text_to_speech tools. Give extra time for reading and assignments. Multi_sensory learning (visual, auditory, and kinesthetic methods` },
    Recognizing: {
        condition: `Dyslexia`,  
        intervention: `Use phonics_based teaching methods. Provide audiobooks and text_to_speech tools. Give extra time for reading and assignments. Multi_sensory learning (visual, auditory, and kinesthetic methods` },
    Fluency: {
        condition: `Dyslexia`,  
        intervention: `Use phonics_based teaching methods. Provide audiobooks and text_to_speech tools. Give extra time for reading and assignments. Multi_sensory learning (visual, auditory, and kinesthetic methods` },
    writing_Spelling: { 
        condition: `Dysgraphia`,  
        intervention: `Use speech_to_text software or typing instead of writing. Allow oral responses or dictation. Provide special lined paper or assistive writing tools.`},
    motor_Skill: {
        condition: `Dysgraphia`,  
        intervention: `Use speech_to_text software or typing instead of writing. Allow oral responses or dictation. Provide special lined paper or assistive writing tools.`},
    letter_formation: { 
        condition: `Dysgraphia`,  
        intervention: `Use speech_to_text software or typing instead of writing. Allow oral responses or dictation. Provide special lined paper or assistive writing tools.`},
    writing_Ability: { 
        condition: `Dysgraphia`,  
        intervention: `Use speech_to_text software or typing instead of writing. Allow oral responses or dictation. Provide special lined paper or assistive writing tools.`},
    Math_Difficult: {
        condition:`Dyscalculia`,  
        intervention: `Use visual aids and hands_on learning . e.g. blocks, counters). Break problems into smaller steps.Allow calculators and extra time for tests.`},
    Understanding_Number: {
        condition: `Dyscalculia`,  
        intervention: `Use visual aids and hands_on learning . e.g. blocks, counters). Break problems into smaller steps.Allow calculators and extra time for tests.`},
    Math_Skill: {
        condition: `Dyscalculia`,  
        intervention: `Use visual aids and hands_on learning . e.g. blocks, counters). Break problems into smaller steps.Allow calculators and extra time for tests.` },
    Math_Symbol: {
        condition: `Dyscalculia`,  
        intervention: `Use visual aids and hands_on learning . e.g. blocks, counters). Break problems into smaller steps.Allow calculators and extra time for tests.` },
    Spoken_language: {
        condition: `Auditory Processing Disorder (APD)`, 
        intervention: `Use written instructions along with verbal explanations. Minimize background noise in the classroom. Use FM systems (amplified teacher voice) or headphones. Encouraging repetition and clarification of instructions` },
    Simila_Sound: {
        condition: `Auditory Processing Disorder (APD)`, 
        intervention: `Use written instructions along with verbal explanations. Minimize background noise in the classroom. Use FM systems (amplified teacher voice) or headphones. Encouraging repetition and clarification of instructions` },
    Focusing: {
        condition: `Auditory Processing Disorder (APD)`, 
        intervention: `Use written instructions along with verbal explanations. Minimize background noise in the classroom. Use FM systems (amplified teacher voice) or headphones. Encouraging repetition and clarification of instructions` },
    recognizing_patterns: { 
        condition: `Visual Processing Disorder (VPD)`,  
        intervention: `Provide large_print materials and high_contrast text. Allow extra time for reading and visual tasks. Use audiobooks and verbal instructions. Provide uncluttered and structured worksheets.` },
    copying: { 
        condition: `Visual Processing Disorder (VPD)`,  
        intervention: `Provide large_print materials and high_contrast text. Allow extra time for reading and visual tasks. Use audiobooks and verbal instructions. Provide uncluttered and structured worksheets.`},
    spatial: { 
        condition: `Visual Processing Disorder (VPD)`,  
        intervention: `Provide large_print materials and high_contrast text. Allow extra time for reading and visual tasks. Use audiobooks and verbal instructions. Provide uncluttered and structured worksheets.` },
    reversal: { 
        condition: `Visual Processing Disorder (VPD)`,  
        intervention: `Provide large_print materials and high_contrast text. Allow extra time for reading and visual tasks. Use audiobooks and verbal instructions. Provide uncluttered and structured worksheets.` },
    Learning_pace: {
        condition: `Mild, Moderate, or Severe Intellectual Disability`, 
        intervention: `Use simplified instructions and repetition. Break tasks into small steps. Provide life_skills training and practical learning. Simplified instructions and step_by_step guidance Repetitive practice and real_life applications Visual aids and hands_on learning` },
    Understanding_concepts: {
        condition: `Mild, Moderate, or Severe Intellectual Disability`, 
        intervention: `Use simplified instructions and repetition. Break tasks into small steps. Provide life_skills training and practical learning. Simplified instructions and step_by_step guidance Repetitive practice and real_life applications Visual aids and hands_on learning` },
    Independence_activities: {
        condition: `Mild, Moderate, or Severe Intellectual Disability`, 
        intervention: `Use simplified instructions and repetition. Break tasks into small steps. Provide life_skills training and practical learning. Simplified instructions and step_by_step guidance Repetitive practice and real_life applications Visual aids and hands_on learning` },
    abstract_critical: {
        condition: `Mild, Moderate, or Severe Intellectual Disability`, 
        intervention: `Use simplified instructions and repetition. Break tasks into small steps. Provide life_skills training and practical learning. Simplified instructions and step_by_step guidance Repetitive practice and real_life applications Visual aids and hands_on learning` },
    Deleyed_speech: {
        condition: `Down Syndrome`,  
        intervention: `Use visual learning aids. Encourage hands_on activities. Provide speech and occupational therapy.` },
    Itellectual: {
        condition: `Down Syndrome`,  
        intervention: `Use visual learning aids. Encourage hands_on activities. Provide speech and occupational therapy.` },
    heart_health: {
        condition: `Down Syndrome`,  
        intervention: `Use visual learning aids. Encourage hands_on activities. Provide speech and occupational therapy.` },
    Hyperactive: {
        condition: `Fragile X Syndrome`,  
        intervention: `Use visual supports and step_by_step instructions. Provide a calm and structured learning environment. Encourage peer interactions through guided social activities. Use hands_on and multi_sensory learning techniques. Offer speech and occupational therapy support.` },
    Language_development: {
        condition: `Fragile X Syndrome`,  
        intervention: `Use visual supports and step_by_step instructions. Provide a calm and structured learning environment. Encourage peer interactions through guided social activities. Use hands_on and multi_sensory learning techniques. Offer speech and occupational therapy support.` },
    Eye_contact: {
        condition: `Fragile X Syndrome`,  
        intervention: `Use visual supports and step_by_step instructions. Provide a calm and structured learning environment. Encourage peer interactions through guided social activities. Use hands_on and multi_sensory learning techniques. Offer speech and occupational therapy support.` },
    Overstimulation: {
        condition: `Fragile X Syndrome`,  
        intervention: `Use visual supports and step_by_step instructions. Provide a calm and structured learning environment. Encourage peer interactions through guided social activities. Use hands_on and multi_sensory learning techniques. Offer speech and occupational therapy support.` },
    Verbal_communication: {
        condition: `Autism Spectrum Disorders (ASD)`,  
        intervention: `Use visual schedules and picture communication. Reduce sensory distractions. Encourage structured play.` },
    Hand_flapping: {
        condition: `Autism Spectrum Disorders (ASD)`,  
        intervention: `Use visual schedules and picture communication. Reduce sensory distractions. Encourage structured play.` },
    Loudness_brightness: {
        condition: `Autism Spectrum Disorders (ASD)`,  
        intervention: `Use visual schedules and picture communication. Reduce sensory distractions. Encourage structured play.` },
    Making_friends: {
        condition: `High_functioning Autism`,  
        intervention: `Provide structured routines. Teach social skills using role_playing. Allow time to process changes.` },
    Jokes_sarcasm: {
        condition: `High_functioning Autism`,  
        intervention: `Provide structured routines. Teach social skills using role_playing. Allow time to process changes.` },
    Specific_topics: {
        condition: `High_functioning Autism`,  
        intervention: `Provide structured routines. Teach social skills using role_playing. Allow time to process changes.` },
    Verbal_communication_2: {
        condition: `Classic Autism`,  
        intervention: `Use visual schedules and picture communication. Reduce sensory distractions.` },
    Repetitive: {
        condition: `Classic Autism`,  
        intervention: `Use visual schedules and picture communication. Reduce sensory distractions.` },
    Language_social: {
        condition: `Pervasive Developmental Disorder`, 
        intervention: `Use visual schedules and structured routines. Provide social skills training and role_playing exercises. Offer sensory_friendly accommodations (quiet spaces, fidget tools). Use clear, concrete language when giving instructions.` },
    noise_light_texture: {
        condition: `Pervasive Developmental Disorder`, 
        intervention: `Use visual schedules and structured routines. Provide social skills training and role_playing exercises. Offer sensory_friendly accommodations (quiet spaces, fidget tools). Use clear, concrete language when giving instructions.` },
    regid_resistance: {
        condition: `Pervasive Developmental Disorder`, 
        intervention: `Use visual schedules and structured routines. Provide social skills training and role_playing exercises. Offer sensory_friendly accommodations (quiet spaces, fidget tools). Use clear, concrete language when giving instructions.` },
    verbal_non_verbal: {
        condition: `Pervasive Developmental Disorder`, 
        intervention: `Use visual schedules and structured routines. Provide social skills training and role_playing exercises. Offer sensory_friendly accommodations (quiet spaces, fidget tools). Use clear, concrete language when giving instructions.` },
    Inability_focusing: {
        condition: `Attention and Behavioral Disorders`, 
        intervention: `Provide short, structured tasks. Use timers and visual reminders. Allow movement breaks.` },
    attention_hyperactive: {
        condition: `Attention and Behavioral Disorders`, 
        intervention: `Provide short, structured tasks. Use timers and visual reminders. Allow movement breaks.` },
    fidgeting: {
        condition: `Attention and Behavioral Disorders`, 
        intervention: `Provide short, structured tasks. Use timers and visual reminders. Allow movement breaks.` },
    Authority_figures: {
        condition: `Oppositional Defiant Disorder (ODD)`,  
        intervention: `Use positive reinforcement and clear consequences. Teach conflict resolution skills. Maintain a predictable routine.` },
    Defying: {
        condition: `Oppositional Defiant Disorder (ODD)`,  
        intervention: `Use positive reinforcement and clear consequences. Teach conflict resolution skills. Maintain a predictable routine.` },
    Easily_frustrated: {
        condition: `Oppositional Defiant Disorder (ODD)`,  
        intervention: `Use positive reinforcement and clear consequences. Teach conflict resolution skills. Maintain a predictable routine.` },
    rule_instructions: {
        condition: `Conduct Disorder (CD)`,  
        intervention: `Set clear, consistent expectations and consequences. Use positive reinforcement to encourage appropriate behavior. Provide structured routines to reduce unpredictability. Implement social skills training and conflict resolution strategies. Work with behavioral specialists and counselors.` },
    Aggressive_behavior: {
        condition: `Conduct Disorder (CD)`,  
        intervention: `Set clear, consistent expectations and consequences. Use positive reinforcement to encourage appropriate behavior. Provide structured routines to reduce unpredictability. Implement social skills training and conflict resolution strategies. Work with behavioral specialists and counselors.` },
    relationships : {
        condition: `Conduct Disorder (CD)`,  
        intervention: `Set clear, consistent expectations and consequences. Use positive reinforcement to encourage appropriate behavior. Provide structured routines to reduce unpredictability. Implement social skills training and conflict resolution strategies. Work with behavioral specialists and counselors.` },
    impulse_control : {
        condition: `Conduct Disorder (CD)`,  
        intervention: `Set clear, consistent expectations and consequences. Use positive reinforcement to encourage appropriate behavior. Provide structured routines to reduce unpredictability. Implement social skills training and conflict resolution strategies. Work with behavioral specialists and counselors.` },
    Speech_delay: {
        condition: `Speech Delay`,  
        intervention: `Use visual aids and gestures to support communication. Provide one_on_one or small group speech therapy. Encourage alternative communication methods . e.g. sign language, speech apps). Be patient and give extra time for responses. Offer structured language_building activities.` },
    Social_settings: {
        condition: `Speech Delay`,  
        intervention: `Use visual aids and gestures to support communication. Provide one_on_one or small group speech therapy. Encourage alternative communication methods . e.g. sign language, speech apps). Be patient and give extra time for responses. Offer structured language_building activities.` },
    Understanding_instructions: {
        condition: `Speech Delay`,  
        intervention: `Use visual aids and gestures to support communication. Provide one_on_one or small group speech therapy. Encourage alternative communication methods . e.g. sign language, speech apps). Be patient and give extra time for responses. Offer structured language_building activities.` },
    reading_and_writing: {
        condition: `Speech Delay`,  
        intervention: `Use visual aids and gestures to support communication. Provide one_on_one or small group speech therapy. Encourage alternative communication methods . e.g. sign language, speech apps). Be patient and give extra time for responses. Offer structured language_building activities.` },
    flow_speech: {
        condition: `Stuttering`,  
        intervention: `Encourage a slow and relaxed speaking pace. Provide alternative ways to participate . e.g. written responses). Foster a supportive, patient classroom environment. Avoid interrupting or finishing the student's sentences. Work with a speech therapist for targeted interventions` },
    Speech_disorder : {
        condition: `Stuttering`,  
        intervention: `Encourage a slow and relaxed speaking pace. Provide alternative ways to participate . e.g. written responses). Foster a supportive, patient classroom environment. Avoid interrupting or finishing the student's sentences. Work with a speech therapist for targeted interventions` },
    Being_teased: {
        condition: `Stuttering`,  
        intervention: `Encourage a slow and relaxed speaking pace. Provide alternative ways to participate . e.g. written responses). Foster a supportive, patient classroom environment. Avoid interrupting or finishing the student's sentences. Work with a speech therapist for targeted interventions` },
    Express_thoughts_frustration: {
        condition: `Stuttering`,  
        intervention: `Encourage a slow and relaxed speaking pace. Provide alternative ways to participate . e.g. written responses). Foster a supportive, patient classroom environment. Avoid interrupting or finishing the student's sentences. Work with a speech therapist for targeted interventions` },
    mouth_movement: {
        condition: `Apraxia of Speech`,  
        intervention: `Use speech therapy exercises. Encourage non_verbal communication (gestures, pictures).` },
    Speech_patterns: {
        condition: `Apraxia of Speech`,  
        intervention: `Use speech therapy exercises. Encourage non_verbal communication (gestures, pictures).` },
    Spoken_language_2: {
        condition: `Receptive or Expressive Language Disorder`,  
        intervention: `Use short, simple sentences. Reinforce with visuals.` },
    partial_visual_impairment: {
        condition: `Blindness/Visual Impairment`,  
        intervention: `Provide braille materials. Use screen readers and magnifiers.` },
    visual_impairment: {
        condition: `Blindness/Visual Impairment`,  
        intervention: `Provide braille materials. Use screen readers and magnifiers.` },
    hearing_lose: {
        condition: `Deafness/Hearing Impairment`,  
        intervention: `Use sign language and speech_to_text tools. Face the student when speaking. ` },
    sensory_iformation_1: {
        condition: `Sensory Processing Disorder (SPD)`,  
        intervention: `Create a sensory_friendly environment: Provide quiet areas, dim lighting options, and noise_canceling headphones if needed.Offer sensory breaks: Allow time for movement . e.g. stretching, fidget toys, weighted blankets). Use individualized accommodations: Modify materials . e.g. softer textures, special seating) based on sensory preferences. Implement a predictable routine: Reduce anxiety by keeping a structured schedule with visual supports. Teach self_regulation techniques: Encourage deep breathing, mindfulness, or sensory_friendly coping strategies. Work with occupational therapists: Incorporate sensory integration activities to help with regulation.` },
    sensory_iformation_2: {
        condition: `Sensory Processing Disorder (SPD)`,  
        intervention: `Create a sensory_friendly environment: Provide quiet areas, dim lighting options, and noise_canceling headphones if needed.Offer sensory breaks: Allow time for movement . e.g. stretching, fidget toys, weighted blankets). Use individualized accommodations: Modify materials . e.g. softer textures, special seating) based on sensory preferences. Implement a predictable routine: Reduce anxiety by keeping a structured schedule with visual supports. Teach self_regulation techniques: Encourage deep breathing, mindfulness, or sensory_friendly coping strategies. Work with occupational therapists: Incorporate sensory integration activities to help with regulation.` },
    sensory_iformation_3: {
        condition: `Sensory Processing Disorder (SPD)`,  
        intervention: `Create a sensory_friendly environment: Provide quiet areas, dim lighting options, and noise_canceling headphones if needed.Offer sensory breaks: Allow time for movement . e.g. stretching, fidget toys, weighted blankets). Use individualized accommodations: Modify materials . e.g. softer textures, special seating) based on sensory preferences. Implement a predictable routine: Reduce anxiety by keeping a structured schedule with visual supports. Teach self_regulation techniques: Encourage deep breathing, mindfulness, or sensory_friendly coping strategies. Work with occupational therapists: Incorporate sensory integration activities to help with regulation.` },
    be_distressing: { 
        condition: `Sensory Processing Disorder (SPD)`,  
        intervention: `Create a sensory_friendly environment: Provide quiet areas, dim lighting options, and noise_canceling headphones if needed. Offer sensory breaks: Allow time for movement . e.g. stretching, fidget toys, weighted blankets). Use individualized accommodations: Modify materials based on sensory preferences. Implement a predictable routine with visual supports. Teach self_regulation techniques. Work with occupational therapists: Incorporate sensory integration activities.`},
    motor_coordination: { 
        condition: `Sensory Processing Disorder (SPD)`,  
        intervention: `Create a sensory_friendly environment: Provide quiet areas, dim lighting options, and noise_canceling headphones if needed. Offer sensory breaks. Use individualized accommodations. Implement a predictable routine. Teach self_regulation techniques. Work with occupational therapists.`},
    under_stimulation: { 
        condition: `Sensory Processing Disorder (SPD)`,  
        intervention: `Create a sensory_friendly environment: Provide quiet areas, dim lighting options, and noise_canceling headphones if needed. Offer sensory breaks. Use individualized accommodations. Implement a predictable routine. Teach self_regulation techniques. Work with occupational therapists.`},
    crowded_hallways: { 
        condition: `Sensory Processing Disorder (SPD)`,  
        intervention: `Create a sensory_friendly environment: Provide quiet areas, dim lighting options, and noise_canceling headphones if needed. Offer sensory breaks. Use individualized accommodations. Implement a predictable routine. Teach self_regulation techniques. Work with occupational therapists.`},
    transition: { 
        condition: `Sensory Processing Disorder (SPD)`,  
        intervention: `Create a sensory_friendly environment: Provide quiet areas, dim lighting options, and noise_canceling headphones if needed. Offer sensory breaks. Use individualized accommodations. Implement a predictable routine. Teach self_regulation techniques. Work with occupational therapists.`},
    avoidance_activities: { 
        condition: `Sensory Processing Disorder (SPD)`,  
        intervention: `Create a sensory_friendly environment: Provide quiet areas, dim lighting options, and noise_canceling headphones if needed. Offer sensory breaks. Use individualized accommodations. Implement a predictable routine. Teach self_regulation techniques. Work with occupational therapists.`},
    Impaired_movement: {
        condition: `Cerebral Palsy`,  
        intervention: `Use assistive devices (wheelchairs, communication boards).Modify classroom seating.` },
    Muscle_weakness: {
        condition: `Muscular Dystrophy`,  
        intervention: `Ensure accessible facilities. Adapt physical activities.`},
    Spinal_cord: {
        condition: `Spina Bifida`,  
        intervention: `Ensure accessibility (ramps, adapted seating, restroom accommodations). Use assistive technology (speech_to_text software, modified keyboards). Provide extra time for tasks requiring fine motor skills. Encourage social inclusion through group activities. Work closely with physical therapists and special education staff.` },
    Spina_Bifida: {
        condition: `Spina Bifida`,  
        intervention: `Ensure accessibility (ramps, adapted seating, restroom accommodations). Use assistive technology (speech_to_text software, modified keyboards). Provide extra time for tasks requiring fine motor skills. Encourage social inclusion through group activities. Work closely with physical therapists and special education staff.` },
    fine_motor_skill: {
        condition: `Spina Bifida`,  
        intervention: `Ensure accessibility (ramps, adapted seating, restroom accommodations). Use assistive technology (speech_to_text software, modified keyboards). Provide extra time for tasks requiring fine motor skills. Encourage social inclusion through group activities. Work closely with physical therapists and special education staff.` },
    Physical_differences: {
        condition: `Spina Bifida`,  
        intervention: `Ensure accessibility (ramps, adapted seating, restroom accommodations). Use assistive technology (speech_to_text software, modified keyboards). Provide extra time for tasks requiring fine motor skills. Encourage social inclusion through group activities. Work closely with physical therapists and special education staff.` },
    Disrupting_learning: {
        condition: `Epilepsy`,  
        intervention: `Train staff and peers on seizure first aid. Provide a quiet, safe space for recovery after seizures. Adjust workload based on energy levels. Allow extra time for processing information. Work closely with medical professionals to monitor health needs.` },
    epilepsy_confusion: {
        condition: `Epilepsy`,  
        intervention: `Train staff and peers on seizure first aid. Provide a quiet, safe space for recovery after seizures. Adjust workload based on energy levels. Allow extra time for processing information. Work closely with medical professionals to monitor health needs.` },
    epilepsy_anxiety: {
        condition: `Epilepsy`,  
        intervention: `Train staff and peers on seizure first aid. Provide a quiet, safe space for recovery after seizures. Adjust workload based on energy levels. Allow extra time for processing information. Work closely with medical professionals to monitor health needs.` },
    epilepsy_med_side_effect: {
        condition: `Epilepsy`,  
        intervention: `Train staff and peers on seizure first aid. Provide a quiet, safe space for recovery after seizures. Adjust workload based on energy levels. Allow extra time for processing information. Work closely with medical professionals to monitor health needs.` },
    excessive_fear: {
        condition: `Anxiety Disorders`,  
        intervention: `Provide a quiet space for breaks. Encourage relaxation techniques.` },
    mood_disorder: {
        condition: `Depression`,  
        intervention: `Provide emotional support. Encourage social connections.` },
    extreme_mood: {
        condition: `Bipolar Disorder`,  
        intervention: `Provide a structured, predictable classroom environment. Offer flexible deadlines and allow movement breaks. Use mood_tracking tools and help students develop coping strategies. Coordinate with parents and mental health professionals. Encourage peer support and social skills training.` },
    concentrating: {
        condition: `Bipolar Disorder`,  
        intervention: `Provide a structured, predictable classroom environment. Offer flexible deadlines and allow movement breaks. Use mood_tracking tools and help students develop coping strategies. Coordinate with parents and mental health professionals. Encourage peer support and social skills training.` },
    risk_taking : {
        condition: `Bipolar Disorder`,  
        intervention: `Provide a structured, predictable classroom environment. Offer flexible deadlines and allow movement breaks. Use mood_tracking tools and help students develop coping strategies. Coordinate with parents and mental health professionals. Encourage peer support and social skills training.` },
    Sleep_disturbances : {
        condition: `Bipolar Disorder`,  
        intervention: `Provide a structured, predictable classroom environment. Offer flexible deadlines and allow movement breaks. Use mood_tracking tools and help students develop coping strategies. Coordinate with parents and mental health professionals. Encourage peer support and social skills training.` },
    withdrawn: {
        condition: `Post_Traumatic Stress Disorder (PTSD)`,  
        intervention: `Create a safe, predictable environment. Avoid loud noises or sudden changes that may trigger anxiety. Allow for breaks when the student feels overwhelmed. Use calming strategies such as mindfulness and breathing exercises. Provide counseling support and encourage open communication.` },
    Remembering_instructions: {
        condition: `Post_Traumatic Stress Disorder (PTSD)`,  
        intervention: `Create a safe, predictable environment. Avoid loud noises or sudden changes that may trigger anxiety. Allow for breaks when the student feels overwhelmed. Use calming strategies such as mindfulness and breathing exercises. Provide counseling support and encourage open communication.` },
    Emotional_distress: {
        condition: `Post_Traumatic Stress Disorder (PTSD)`,  
        intervention: `Create a safe, predictable environment. Avoid loud noises or sudden changes that may trigger anxiety. Allow for breaks when the student feels overwhelmed. Use calming strategies such as mindfulness and breathing exercises. Provide counseling support and encourage open communication.` },
    avoidance: {
        condition: `Post_Traumatic Stress Disorder (PTSD)`,  
        intervention: `Create a safe, predictable environment. Avoid loud noises or sudden changes that may trigger anxiety. Allow for breaks when the student feels overwhelmed. Use calming strategies such as mindfulness and breathing exercises. Provide counseling support and encourage open communication.` },
    multiple_disabilities: {
        condition: `Students with multiple disabilities`,  
        intervention: `Requires individualized and multi_faceted support. Each student with special educational needs requires personalized support, such as individualized education plans (IEPs), assistive technology, modified curriculum, or specialized teaching methods to help them succeed. Requires individualized and multi_faceted support. Each student with special educational needs requires personalized support, such as individualized education plans (IEPs), assistive technology, modified curriculum, or specialized teaching methods to help them succeed.` },
    multiple_disabilities_2: {
        condition: `Students with multiple disabilities`,  
        intervention: `Requires individualized and multi_faceted support. Each student with special educational needs requires personalized support, such as individualized education plans (IEPs), assistive technology, modified curriculum, or specialized teaching methods to help them succeed. Requires individualized and multi_faceted support. Each student with special educational needs requires personalized support, such as individualized education plans (IEPs), assistive technology, modified curriculum, or specialized teaching methods to help them succeed.` }
};

// Function to classify the student based on selected difficulties
function classifyStudent() {
    console.log("Classify Student button clicked");
    // Get student profile data
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const sex = document.getElementById('sex').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const section = document.getElementById('section').value;
    const teacherName = document.getElementById('teacherName').value;
    const date = document.getElementById('date').value;
    const schoolName = document.getElementById('schoolName').value;
    const region = document.getElementById('region').value;
    const zone = document.getElementById('zone').value;
    const woreda = document.getElementById('woreda').value;

    // Display student profile
    document.getElementById('displayName').textContent = `${firstName} ${middleName} ${lastName}`;
    document.getElementById('displaySex').textContent = sex;
    document.getElementById('displayAge').textContent = age;
    document.getElementById('displayGrade').textContent = grade;
    document.getElementById('displaySection').textContent = section;
    document.getElementById('displayTeacher').textContent = teacherName;
    document.getElementById('displayDate').textContent = date;
    document.getElementById('displaySchoolName').textContent = schoolName;
    document.getElementById('displayRegion').textContent = region;
    document.getElementById('displayZone').textContent = zone;
    document.getElementById('displayWoreda').textContent = woreda;

    // Get selected difficulties
    const selectedDifficulties = [];
    document.querySelectorAll('.difficulty-list input[type="checkbox"]:checked').forEach(checkbox => {
        selectedDifficulties.push(checkbox.value);
    });

    const resultDiv = document.getElementById('result');
    const conditionsList = document.getElementById('conditions');
    conditionsList.innerHTML = ''; // Clear previous results

    if (selectedDifficulties.length === 0) {
        resultDiv.style.display = 'none';
        alert("Please select at least one difficulty.");
        return;
    }

    // Initialize a set to keep track of unique conditions
    const uniqueConditions = new Set();

    // Display conditions and interventions without duplication
    selectedDifficulties.forEach(difficulty => {
        if (difficultyMap[difficulty]) {
            const cond = difficultyMap[difficulty].condition;
            if (!uniqueConditions.has(cond)) {
                uniqueConditions.add(cond);
                const li = document.createElement('li');
                li.innerHTML = `<strong>${cond}</strong>: ${difficultyMap[difficulty].intervention}`;
                conditionsList.appendChild(li);
            }
        }
    });

    resultDiv.style.display = 'block';
}

function exportToCSV() {
    // Collect data from the form and results section
    const studentData = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        sex: document.getElementById("sex").value,
        age: document.getElementById("age").value,
        grade: document.getElementById("grade").value,
        section: document.getElementById("section").value,
        teacherName: document.getElementById("teacherName").value,
        date: document.getElementById("date").value,
        schoolName: document.getElementById("schoolName").value,
        region: document.getElementById("region").value,
        zone: document.getElementById("zone").value,
        woreda: document.getElementById("woreda").value,
        difficulties: Array.from(document.querySelectorAll('.difficulty-list input[type="checkbox"]:checked')).map(checkbox => checkbox.value).join(', '),
        conditions: Array.from(document.getElementById("conditions").children).map(li => li.textContent).join(', ')
    };

    // Get existing data from local storage or initialize an empty array
    let existingData = JSON.parse(localStorage.getItem('studentReports')) || [];

    // Add the new student data to the existing data
    existingData.push(studentData);

    // Store the updated data back in local storage
    localStorage.setItem('studentReports', JSON.stringify(existingData));

    // Convert the entire data array to CSV format
    const csv = Papa.unparse({
        fields: Object.keys(studentData), // Headers
        data: existingData
    });

    // Create a download link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "student_reports.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportToJPG() {
    const reportCard = document.getElementById('reportCard');

    html2canvas(reportCard).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'student_report.jpg';
        link.click();
    });
}

function exportToWord() {
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export to Word</title></head><body>";
    var footer = "</body></html>";
    
    // Clone the results element and set photo size if present
    var resultsClone = document.getElementById("results").cloneNode(true);
    var photo = resultsClone.querySelector('#displayPhoto');
    if (photo) {
        photo.setAttribute('style', 'width:3in; height:4in;');
    }
    var content = resultsClone.innerHTML;
    
    var sourceHTML = header + content + footer;
    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'result.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

function clearForm() {
    const container = document.getElementById('studentForm');
    container.querySelectorAll('input').forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    container.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
    // Clear image preview if any
    const displayPhoto = document.getElementById('displayPhoto');
    if (displayPhoto) {
        displayPhoto.src = '';
    }
}

// Listen for changes in the photoUpload input field
document.getElementById('photoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        // Set the src of the displayPhoto image to the file data
        document.getElementById('displayPhoto').src = e.target.result;
    };
    reader.readAsDataURL(file);
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('studentForm');
    if(form){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Assuming classifyStudent is available in the global scope
            classifyStudent();
        });
    }
});
